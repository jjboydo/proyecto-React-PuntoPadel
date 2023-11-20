import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../asyncMock"
import { FaCircleExclamation } from "react-icons/fa6";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { category } = useParams()

  useEffect(() => {
    setIsLoading(true)
    getProducts()
      .then((response) => {
        if (category) {
          const prodFilter = response.filter((product) => product.category === category)
          prodFilter.length > 0 ? setProducts(prodFilter) : setProducts([])
        } else {
          setProducts(response)
        }
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [category])

  return (
    <>
      {isLoading ? <div className="mx-auto flex flex-col justify-center items-center my-[20vh]">
        <h2 className="text-accent text-[50px] font-titulo" > Punto Padel </h2>
        <img class="w-20 h-20 animate-bounce" src="/img/punto-padel-favicon-color.svg" alt="Loading icon" />
        <h2 className="text-accent text-[20px] font-titulo animate-pulse" > Cargando... </h2>
      </div> : <ItemList products={products} />}

      {(products.length == 0 && !isLoading) && <div className="w-[90vh] m-auto mt-16" role="alert">
        <div className="bg-secondary text-white font-bold rounded-t px-4 py-2 flex items-center justify-around">
          <FaCircleExclamation />
          <p>No hay productos disponibles para la categoria seleccionada</p>
        </div>
      </div>}
    </>
  )
}
