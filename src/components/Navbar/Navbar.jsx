import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget"
import { FaBars } from "react-icons/fa6";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
} from '@chakra-ui/react'

export const Navbar = () => {
    return (
        <nav className="bg-accent w-full flex justify-between p-0 font-titulo">
            <div className="h-10vh flex md:justify-evenly justify-between lg:py-5 px-10 py-4 flex-1 w-screen">
                <div className='flex items-center'>
                    <Link to={"/"}>
                        <img className="h-8 xl:h-12 md:h-10" src="/img/logo-no-background.png" alt="logo" />
                    </Link>
                </div>

                <ul className="md:flex md:text-[12px] md:space-x-8 lg:flex-1 items-center justify-center hidden px-4 lg:space-x-12 lg:text-[18px] uppercase">
                    <li><NavLink to={"/"} className="text-back hover:text-primary">Inicio</NavLink></li>
                    <li><NavLink to={"/category/paletasNac"} className="text-back hover:text-primary">Paletas Nacionales</NavLink></li>
                    <li><NavLink to={"/category/paletasImp"} className="text-back hover:text-primary">Paletas Importadas</NavLink></li>
                    <li><NavLink to={"/category/indumentaria"} className="text-back hover:text-primary">Indumentaria</NavLink></li>
                </ul>

                <CartWidget />

                <a className="navbar-burger self-center sm:mr-12 md:hidden" href="#">
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<FaBars size={25} color="white" />}
                            variant='filled'
                        />
                        <MenuList>
                            <MenuItem >
                                <NavLink to={"/"} className="text-accent hover:text-primary">Inicio</NavLink>
                            </MenuItem>
                            <MenuItem >
                                <NavLink to={"/category/paletasNac"} className="text-accent hover:text-primary">Paletas Nacionales</NavLink>
                            </MenuItem>
                            <MenuItem >
                                <NavLink to={"/category/paletasImp"} className="text-accent hover:text-primary">Paletas Importadas</NavLink>
                            </MenuItem>
                            <MenuItem >
                                <NavLink to={"/category/indumentaria"} className="text-accent hover:text-primary">Indumentaria</NavLink>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </a>
            </div>
        </nav>
    )
}
