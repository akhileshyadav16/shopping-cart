import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/slices/CartSlice";
import { Toaster,toast } from "react-hot-toast";
import { FaRupeeSign } from "react-icons/fa";

function Product({item}){
    const {carts} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const addToCart = ()=>{
        dispatch(add(item));
        toast.success("Item is added in Cart!");
    }
    const removeFromCart = ()=>{
        dispatch(remove(item.id));
        toast.error("Item is removed from Cart!");
    }

    return(
        <div className="h-[400px] bg-slate-200 w-11/12 sm:w-80 my-5 py-3 rounded-lg mx-1 hover:scale-105 border-2 border-gray-300 inset-shadow-xs ease-in duration-300 group">
            <p className="text-lg text-slate-800 font-bold text-center">{item.title.substring(0,30)+".."}</p>
            <p className="text-xs text-slate-700 font-normal mx-10 my-1">{item.description.substring(0,75)+'...'}</p>
            <img className="h-52 px-4 bg-white rounded-md py-2 md:h-56 w-11/12 sm:w-3/4 my-1  mx-auto object-contain" src={item.image} alt="pic"/>
            <div className="flex justify-between mx-4 my-5 flex-wrap">
                <span className="text-blue-700 font-bold text-2xl font-sans px-2 py-1"><FaRupeeSign className="inline" />{item.price}</span>
                {
                    !(carts.some((p)=>p.id==item.id)) ? 
                    (<button className="w-fit h-10 px-2 py-1 bg-slate-800 text-sm font-semibold rounded-md text-white" onClick={addToCart}>ADD TO CART</button>) : 
                    (<button  className="w-fit h-10 px-2 py-1 bg-slate-800 text-sm font-semibold rounded-md text-white " onClick={removeFromCart}>REMOVE ITEM</button>)
                }
            </div>
        </div>
    );
}

export default Product;