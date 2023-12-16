import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)
    return (
        <div className="flex items-center space-x-2 sm:flex-1 sm:place-content-end mr-5 md:flex-none">
            <NavLink to={"/cart"}>
                <FaCartShopping color="#DDEBF9" size={25} />
                {cartQuantity == 0
                    ||
                    <span className="flex absolute -mt-12 p-5">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary">
                        </span>
                    </span>
                }
            </NavLink>
            {cartQuantity == 0 
            ||
                <p className="bg-secondary text-texto rounded-full w-7 text-center text-sm">{cartQuantity}</p>
            }
        </div>
    )
}
