import {NavLink} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar(){
    const {carts} = useSelector((state)=>state.cart);
    return(
        <div className="h-20 bg-slate-900 w-screen">
            <div className="flex justify-between items-center w-3/4 mx-auto h-full">
                <NavLink to="/">
                    <img src="https://codehelp-shopping-cart.netlify.app/logo.png" alt="logo" className="h-14"/>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink className="text-white font-normal text-lg" to="/">Home</NavLink>
                    <NavLink to={'/cart'} className="relative">
                        <FaShoppingCart to={'/cart'} className="text-white text-2xl"/>
                        {   carts.length > 0 &&
                            <span className="rounded-full text-white bg-green-600 w-5 flex justify-center items-center h-5 top-[-8px] left-3 mr-0 text-center font-medium absolute animate-bounce">{carts.length}</span>
                        }
                    </NavLink>
                    
                </div>
            </div>
            
        </div>
    );
}

export default Navbar;

