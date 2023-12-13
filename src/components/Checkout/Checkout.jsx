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

export const Checkout = () => {

    const { cart, cartTotal } = useContext(CartContext);

    const firstField = React.useRef()
    return (
        <Drawer
            isOpen={true}
            placement='top'
            initialFocusRef={firstField}
            size={"full"}
        >
            <DrawerOverlay />
            <DrawerContent>
                <Link to={"/"}>
                    <FaRegCircleXmark size={25} className='absolute left-[97%] top-[3%] text-back' />
                </Link>
                <DrawerHeader borderBottomWidth='1px' className='font-titulo bg-accent text-back'>
                    Descripción de tu compra:
                </DrawerHeader>
                <DrawerBody>
                    <div className="bg-gray-100 h-screen py-8">
                        <div className="container mx-auto px-4">
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
                                                                <img className="h-10 w-10 mr-4" src={item.img} alt="Producto" />
                                                                <span className="font-titulo2 font-semibold">{item.name}</span>
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
                                        <form className="max-w-sm mx-auto">
                                            <div className="grid md:grid-cols-2 md:gap-6">
                                                <div className="mb-5">
                                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-titulo2">
                                                        Nombre
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-5">
                                                    <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-titulo2">
                                                        Apellido
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="lastname"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-titulo2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-titulo2"
                                                    placeholder="ejemplo@gmail.com"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-titulo2">
                                                    Teléfono
                                                </label>
                                                <input
                                                    type="number"
                                                    id="tel"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-titulo2"
                                                    placeholder="3874845224"
                                                    required
                                                />
                                            </div>
                                            <hr className="my-2" />
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold font-titulo2">Total de la compra:</span>
                                                <span className="font-semibold font-titulo">$ {cartTotal}</span>
                                            </div>
                                            <button type="submit" className="bg-accent font-titulo text-back py-2 px-4 rounded-lg mt-4 w-full">
                                                Finalizar compra
                                            </button>
                                        </form>
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
