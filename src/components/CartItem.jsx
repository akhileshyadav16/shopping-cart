import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";
import { FaRupeeSign } from "react-icons/fa";

export default function CartItem({cart}){
    const dispatch = useDispatch();
    const removeFromCart = ()=>{
        dispatch(remove(cart.id));
        toast.success("Item removed from cart!");
    }

    return(
        <div className="w-4/5 my-10">
            <div className="flex gap-5 w-full">
                <img src={cart.image} className="h-[180px] object-contain"  alt="pic"/>
                <div className="w-1/2 border-b-2 border-slate-500">
                    <h1 className="font-bold text-xl my-5">{cart.title}</h1>
                    <p>{cart.description.substring(0,100)+'...'}</p>
                    <div className="flex justify-between w-1/2 mt-2 mx-5">
                        <span className="text-green-600 font-bold text-lg"><FaRupeeSign className="inline" />{cart.price}</span>
                        <button className="bg-pink-400 text-red-700 w-8 h-8 flex justify-center items-center rounded-full" onClick={removeFromCart}><MdDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}