import {NavLink} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar(){
    const {carts} = useSelector((state)=>state.cart);
    return(
        <div className="h-20 bg-slate-800 w-full">
            <nav className="flex justify-between items-center mx-auto w-11/12 h-full">
                <NavLink to="/">
                    <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/557189/large_cartpro_0.png" alt="logo" className="h-20 w-32"/>
                </NavLink>
                <div className="flex gap-2 sm:gap-4 md:gap-6">
                    <NavLink className="text-white font-normal text-sm sm:text-lg" to="/">Home</NavLink>
                    <NavLink to={'/cart'} className="relative">
                        <FaShoppingCart to={'/cart'} className="text-white text-xl sm:text-2xl"/>
                        {   carts.length > 0 &&
                            <span className="rounded-full text-white bg-green-600 w-5 flex justify-center items-center h-5 top-[-8px] left-3 mr-0 text-center font-medium absolute animate-bounce">{carts.length}</span>
                        }
                    </NavLink>
                    
                </div>
            </nav>
            
        </div>
    );
}

export default Navbar;

