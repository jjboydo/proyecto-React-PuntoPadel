import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useCount } from "../../hooks/useCount";
import { Button } from "../Button/Button";

export const ItemCount = ({ stock, initial = 1, item }) => {

    const { count, increment, decrement } = useCount(initial, stock)
    const { addItem } = useContext(CartContext)


    return (
        <>
            <div className="w-32 flex items-center gap-3">
                <Button content="-" functionClick={decrement} />
                <h2 className="text-center px-4 pt-3 text-xl w-20">{count}</h2>
                <Button content="+" functionClick={increment} />
            </div>
            <div className="flex items-center -mx-4 mt-7 w-full">
                <div className="w-full px-4 mb-4 lg:mb-0">
                    {stock > 0 ?
                        <button className="bg-back rounded-md mt-4 before:ease relative h-12 w-full overflow-hidden border border-accent shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-[500px] before:w-[150%] before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-accent before:transition-all before:duration-300 hover:text-back hover:shadow-black hover:before:-rotate-180">
                            <span className="relative z-10 font-titulo2 font-semibold text-md" onClick={() => {
                                addItem({ ...item, stock }, count)
                            }} >Añadir al carrito</span>
                        </button> : <button className="bg-back h-12 w-full mt-4 rounded-md cursor-not-allowed">
                            <span className="relative z-10 font-titulo2 font-semibold text-md" onClick={() => {
                                addItem({ ...item, stock }, count)
                            }} >No hay stock del producto</span>
                        </button>}
                </div>
            </div>
        </>
    )
}
