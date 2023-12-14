import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaRegCircleXmark } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Form } from '../Form/Form'

export const Checkout = () => {

    const { cart } = useContext(CartContext);

    const firstField = React.useRef()
    return (
        <Drawer
            isOpen={true}
            placement='top'
            initialFocusRef={firstField}
            size={"full"}
            overflow='scroll'
        >
            <DrawerOverlay />
            <DrawerContent>
                <Link to={"/"}>
                    <FaRegCircleXmark size={25} className='absolute md:left-[95%] left-[90%] top-[2%] text-back' />
                </Link>
                <DrawerHeader borderBottomWidth='1px' className='font-titulo bg-accent text-back'>
                    Descripción de tu compra:
                </DrawerHeader>
                <DrawerBody>
                    <div className="bg-gray-100 h-screen py-8">
                        <div className="container mx-auto sm:px-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-3/4">
                                    <div className="bg-back rounded-lg shadow-md p-6 mb-4">
                                        <table className="w-full">
                                            <thead>
                                                <tr>
                                                    <th className="text-left font-semibold font-titulo">Producto</th>
                                                    <th className="text-left font-semibold font-titulo">Precio</th>
                                                    <th className="text-left font-semibold font-titulo">Cantidad</th>
                                                    <th className="text-left font-semibold font-titulo ">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map((item) => (
                                                    <tr key={item.id}>
                                                        <td className="py-3">
                                                            <div className="flex items-center">
                                                                <img className="h-10 w-10 mr-4 object-contain mix-blend-multiply hidden sm:block" src={item.img} alt="Producto" />
                                                                <span className="font-titulo2 font-semibold sm:w-full w-28">{item.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3">$ {item.price}</td>
                                                        <td className="py-3">
                                                            <div className="flex items-center">
                                                                <span className="text-center w-20">{item.quantity}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3">$ {item.subtotal}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="md:w-1/4">
                                    <div className="bg-back rounded-lg shadow-md p-6">
                                        <h2 className="text-lg font-semibold mb-4 font-titulo">Datos de contacto</h2>
                                        <Form/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
