import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../asyncMock"

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { category } = useParams()

  useEffect(() => {
    getProducts()
      .then((resp) => {
        setProducts(resp)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  })

  return (
    <>
      {isLoading ? <h2> Cargando productos... </h2> : <ItemList products={products} />}
    </>
  )
}
