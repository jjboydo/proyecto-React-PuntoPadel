import { useParams } from "react-router-dom"
import { Item } from "../Item/Item"
import { Footer } from "../Footer/Footer"

export const ItemList = ({ products }) => {

  const { category } = useParams()

  // Mapeo la categorias para mostrar un titulo mejor al renderizar
  const mapCategory = (category) => {
    switch (category) {
      case "paletasNac":
        return "Paletas Nacionales";
      case "paletasImp":
        return "Paletas Importadas";
      case "indumentaria":
        return "Indumentaria";
      default:
        return "Productos";
    }
  }

  const adjustedCategory = mapCategory(category)

  return (
    <>
      {
        products.length == 0 ||
        <div className="bg-texto text-back h-36 w-full flex items-center justify-center">
          <h2 className="font-titulo text-4xl md:text-5xl uppercase text-center">{adjustedCategory}</h2>
        </div>
      }
      <div className="flex flex-wrap justify-evenly gap-10">
        {products.map(product => <Item key={product.id} {...product} />)}
      </div>
      <Footer />
    </>
  )
}
