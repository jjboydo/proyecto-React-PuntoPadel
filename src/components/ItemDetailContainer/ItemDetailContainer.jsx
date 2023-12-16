import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../config/firebaseConfig"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Alerts } from "../Alert/Alerts"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()
    const [isInDB, setIsInDB] = useState(true)

    const getProductById = (id) => {
        const productQuery = doc(db, "products", id)
        getDoc(productQuery)
            .then((response) => {
                if (response.exists()) {
                    const product = {
                        id: response.id,
                        ...response.data()
                    }
                    setItem(product)
                    setIsLoading(false)
                } else {
                    setIsInDB(false)
                }
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        setIsLoading(true)
        getProductById(id)
    }, [])


    return (
        <>
            {isLoading ?
                <div className="mx-auto flex flex-col justify-center items-center my-[20vh]">
                    <h2 className="text-accent text-[50px] font-titulo" > Punto Padel </h2>
                    <img className="w-20 h-20 animate-bounce" src="/img/punto-padel-favicon-color.svg" alt="Loading icon" />
                    <h2 className="text-accent text-[20px] font-titulo animate-pulse" > Cargando... </h2>
                </div>
                :
                item && <ItemDetail {...item} />
            }
            {!isInDB &&
                <Alerts title={"Error"} status={"error"} message={"El producto que estás buscando no existe"} />
            }
        </>
    )
}
