import { Item } from "../Item/Item"

export const ItemList = ({products}) => {
  return (
    <>
        <div className="flex flex-wrap justify-evenly gap-10">
            {products.map( product => <Item key={product.id} {...product}  />)}
        </div>
    </>
  )
}
