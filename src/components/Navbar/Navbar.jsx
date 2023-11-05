import { CartWidget } from "../CartWidget/CartWidget"
import { FaBars } from "react-icons/fa6";

export const Navbar = () => {
    return (
        <nav className="bg-accent w-full flex justify-between p-0 font-titulo">
            <div className="h-10vh flex md:justify-evenly justify-between lg:py-5 px-10 py-4 flex-1 w-screen">

                <div className='flex items-center'>
                    <a href="#">
                        <img className="h-8 xl:h-12 md:h-10" src="/img/logo-no-background.png" alt="logo" />
                    </a>
                </div>

                <ul className="md:flex md:text-[18px] md:space-x-8 lg:flex-1 items-center justify-center hidden px-4 lg:space-x-12 lg:text-[21px]">
                    <li><a className="text-back hover:text-primary" href="#">Inicio</a></li>
                    <li><a className="text-back hover:text-primary" href="#">Paletas</a></li>
                    <li><a className="text-back hover:text-primary" href="#">Indumentaria</a></li>
                    <li><a className="text-back hover:text-primary" href="#">Contacto</a></li>
                </ul>

                <CartWidget/>

                <a className="navbar-burger self-center mr-12 md:hidden" href="#">
                    <FaBars color="#DDEBF9" size={25}/>
                </a>
            </div>
        </nav>
    )
}
