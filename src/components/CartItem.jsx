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
        <div className="w-full  h-fit py-4 my-6">
            <div className="flex flex-col md:flex-row items-center border-b-2 border-slate-600 pb-6 rounded-b-xl px-2 mx-auto gap-4 md:gap-8 w-full md:w-11/12 ">
                <img src={cart.image} className="h-52 md:h-80 px-1 py-1 bg-white rounded-md w-full sm:w-3/4 md:w-1/3 object-contain" alt="pic"/>
                <div className="w-full md:w-3/5">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl my-5 font-serif">{cart.title}</h1>
                    <p className="text-slate-900 px-1 w-full">{cart.description}</p>
                    <div className="flex w-11/12 mt-10 justify-between px-4  mx-5">
                        <span className="text-blue-700 font-bold text-3xl sm:text-4xl"><FaRupeeSign className="inline" />{cart.price}</span>
                        <button className="bg-red-300 text-white w-10 h-10 flex justify-center items-center rounded-md" onClick={removeFromCart}><MdDelete className="text-red-700 w-6 h-6" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}