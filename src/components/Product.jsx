import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/slices/CartSlice";
import { Toaster,toast } from "react-hot-toast";

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
        <div className="h-80 w-1/5 my-5 rounded-lg mx-1 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:scale-110 ease-in duration-300 group">
            <p className="text-lg text-slate-600 font-bold text-center">{item.title.substring(0,15)+"..."}</p>
            <p className="text-[10px] text-slate-400 mx-10 my-1">{item.description.substring(0,60)+'...'}</p>
            <img className="h-[180px] w-3/5 mx-auto object-contain" src={item.image} alt="pic"/>
            <div className="flex justify-between mx-4 mt-6 flex-wrap">
                <span className="text-green-600 font-bold text-md">${item.price}</span>
                {
                    !(carts.some((p)=>p.id==item.id)) ? 
                    (<button className="border-2 border-gray-500 rounded-2xl px-2 py-1 text-xs font-medium duration-500 group-hover:bg-slate-700 group-hover:text-white group-hover:font-bold" onClick={addToCart}>ADD TO CART</button>) : 
                    (<button  className="border-2 border-gray-500 rounded-2xl px-2 py-1 text-xs font-medium duration-500 group-hover:bg-slate-700 group-hover:text-white group-hover:font-bold " onClick={removeFromCart}>REMOVE ITEM</button>)
                }
            </div>
        </div>
    );
}

export default Product;