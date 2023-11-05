import { FaCartShopping } from "react-icons/fa6";

export const CartWidget = () => {
    return (
        <div className="flex items-center space-x-2 sm:flex-1 sm:place-content-end mr-5 md:flex-none">
            <FaCartShopping color="#DDEBF9" size={25} />
            <span className="flex absolute -mt-4 p-5">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary">
                </span>
            </span>
            <p className="bg-secondary text-texto rounded-full w-5 text-center text-sm">7</p>
        </div>
    )
}
