import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { Alerts } from '../Alert/Alerts';
import { useToast } from '@chakra-ui/react';

export const Form = () => {

    const { cart, cartTotal, clearCart } = useContext(CartContext)
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [emailVer, setEmailVer] = useState("")
    const [tel, setTel] = useState("")
    const [validation, setValidation] = useState(true)
    const [isFinished, setIsFinished] = useState(false)
    const [orderId, setOrderId] = useState("")
    const toast = useToast()

    const addOrder = async (cartItems, userData, total) => {
        const newOrder = {
            buyer: userData,
            items: cartItems,
            data: serverTimestamp(),
            total
        }

        const orderRef = await addDoc(collection(db, "orders"), newOrder)
        setOrderId(orderRef.id)
        clearCart()
    }

    const handleForm = (e) => {
        e.preventDefault()

        if (email === emailVer) {
            addOrder(cart, { name, lastname, email, tel }, cartTotal)
            discountStock(cart)
            setName("")
            setEmail("")
            setIsFinished(true)
        } else {
            toast({
                title: 'Error! Los mails no coinciden. Por favor inserte los datos nuevamente',
                status: 'error',
                duration: 2000,
                position: 'top',
                variant: 'top-accent',
                containerStyle: {
                    fontSize: '20px'
                },
            })
        }
    }

    const discountStock = async (cartItems) => {
        await cartItems.map((item) => {
            getDoc(doc(db, "products", item.id))
                .then((response) => {
                    if (response.exists()) {
                        const product = {
                            id: response.id,
                            ...response.data()
                        }
                        if (product.stock < 1 || product.stock < item.quantity) {
                            setValidation(false)
                            return 
                        }
                        updateDoc(doc(db, "products", item.id), { stock: product.stock - item.quantity })
                    }
                })
                .catch((error) => console.log(error))
        })
    }

    return (
        <>
            <form className="max-w-sm mx-auto" onSubmit={handleForm}>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-titulo2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-titulo2"
                        placeholder="ejemplo@gmail.com"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email-ver" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-titulo2">
                        Repetir Email
                    </label>
                    <input
                        type="email"
                        id="email-ver"
                        value={emailVer}
                        onChange={(e) => setEmailVer(e.target.value)}
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
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
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
            { isFinished && (validation ? <Alerts title={"Compra realizada"} status={"success"} message={`La compra fue realizada con exito! El N° de órden es: ${orderId}`} /> : <Alerts title={"Error en la compra"} status={"error"} message={"Los productos ya no estan disponibles"} />)}
        </>
    )
}
