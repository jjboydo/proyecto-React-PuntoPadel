import { useParams } from "react-router-dom"
import { Item } from "../Item/Item"
import { Footer } from "../Footer/Footer"

export const ItemList = ({products}) => {

  const { category } = useParams()

  let categoryCopy = category

  if(categoryCopy == "paletasNac"){
    categoryCopy = "paletas nacionales"
  } else if(categoryCopy == "paletasImp") {
    categoryCopy = "paletas imporatadas"
  } else if(categoryCopy == "indumentaria") {
  } else {
    categoryCopy = "Productos"
  }

  return (
    <>
        <div className="bg-texto text-back h-36 w-full flex items-center justify-center">
          <h2 className="font-titulo text-5xl uppercase">{categoryCopy}</h2>
        </div>
        <div className="flex flex-wrap justify-evenly gap-10">
            {products.map( product => <Item key={product.id} {...product}  />)}
        </div>
        <Footer/>
    </>
  )
}
