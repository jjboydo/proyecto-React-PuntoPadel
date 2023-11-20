import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        getProductById(id)
            .then((response) => {
                setItem(response)
                setIsLoading(false)
            })
            .catch((err) => { console.log(err) })
    }, [])


    return (
        <>
            {isLoading ? <div className="mx-auto flex flex-col justify-center items-center my-[20vh]">
                <h2 className="text-accent text-[50px] font-titulo" > Punto Padel </h2>
                <img class="w-20 h-20 animate-bounce" src="/img/punto-padel-favicon-color.svg" alt="Loading icon" />
                <h2 className="text-accent text-[20px] font-titulo animate-pulse" > Cargando... </h2>
            </div> : item && <ItemDetail {...item} />}
        </>
    )
}
