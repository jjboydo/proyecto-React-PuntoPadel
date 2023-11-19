import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../asyncMock"

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { category } = useParams()

  console.log(category)

  useEffect(() => {
    setIsLoading(true)
    getProducts()
      .then((response) => {
        if (category) {
          const prodFilter = response.filter((product) => product.category === category )
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
      {isLoading ? <h2> Cargando productos... </h2> : <ItemList products={products} />}
      {(products.length == 0 && !isLoading) && <h2> No hay productos para esa categoría </h2>  }
    </>
  )
}
