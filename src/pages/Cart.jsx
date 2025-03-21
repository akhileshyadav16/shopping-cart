import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";


function Cart(){
    const {carts} = useSelector((state) => state.cart);
    
    console.log("Here is cart items"+carts);
    const [totalAmount,setTotalAmount] = useState(0);
    useEffect(()=>{
        setTotalAmount(carts.reduce((acc,curr)=>acc+curr.price,0,));
    },[carts])
    return(
        <div className="h-auto w-screen">
            <div className="h-full w-full">
                {
                    (carts.length > 0) ?
                    (<div className="flex">
                        <div className="flex flex-col gap-5 items-center">
                            {
                                carts.map((cart,index)=>{
                                    return <CartItem key={cart.id} cart={cart} itemIndex={index}/> 
                                })
                            }
                        </div>
                        <div className="flex flex-col h-auto py-5 justify-between my-5">
                            <div className="mt-5">
                                <p className="text-green-800 text-xl font-semibold uppercase">Your Cart</p>
                                <h2 className="text-green-700 text-5xl font-bold">SUMMARY</h2>
                                <p className="font-bold text-xl my-5">
                                 total items :<span className="font-medium"> {carts.length}</span> 
                                </p>
                            </div>
                            <div className="mb-10">
                                <p className="font-bold text-2xl text-slate-600">Total Amount : <span className=" text-black font-bold"><FaRupeeSign className="inline" />{totalAmount}</span></p>
                                <button className="bg-green-600 w-48 h-10 text-white rounded-lg my-5 mx-auto">Checkout Now</button>
                            </div>
                        </div>
                    </div>
                    ) :
                    (
                        <div className="flex flex-col items-center justify-center w-screen h-[600px] gap-3">
                            <p className="font-semibold text-xl">Your cart is empty!</p>
                            <Link to={'/'}>
                                <button className="bg-green-600 w-36 h-10 rounded-lg text-white font-bold">SHOP NOW</button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Cart;