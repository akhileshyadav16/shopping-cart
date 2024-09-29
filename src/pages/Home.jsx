import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home(){
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const [items,setItems] = useState([]);

    async function fetchShoppingData(){
        setLoading(true);
        try{
            const res = await fetch(API_URL);
            const data = await res.json();
            setItems(data);
        }
        catch(error){
            alert("Items not Found");
            console.log("error");
        }
        setLoading(false);
        console.log("setloading false");
    }

    useEffect(()=>{
        fetchShoppingData();
    },[])

    return(
        <div className="w-screen">
            <div className="w-4/5 mx-auto flex flex-wrap justify-evenly my-10">
                {
                    loading ? (<Spinner/>) :
                    (
                        items.length > 0 ?
                        (
                            items.map((item)=>
                                {
                                    return(
                                        <Product item={item} key={item.id}/>
                                    );
                                }
                            )

                        ) :
                        (<p>No data Found !!!</p>)
                    )
                }
            </div>
        </div>
    );


}

export default Home;