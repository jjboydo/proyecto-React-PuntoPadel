import { useEffect, useState } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { category } = useParams()

  const getProducts = () => {
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"))
    getDocs(myProducts)
      .then((resp) => {
        if (resp.size === 0) {
          console.log("No hay productos cargados en la base de datos");
        }
        const productList = resp.docs.map((doc) => {
          const product = {
            id: doc.id,
            ...doc.data(),
          };

          return product;
        })
        setProducts(productList)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    setIsLoading(true)
    getProducts()
  }, [category])

  return (
    <>
      {isLoading ? <div className="mx-auto flex flex-col justify-center items-center my-[20vh]">
        <h2 className="text-accent text-[50px] font-titulo" > Punto Padel </h2>
        <img className="w-20 h-20 animate-bounce" src="/img/punto-padel-favicon-color.svg" alt="Loading icon" />
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
