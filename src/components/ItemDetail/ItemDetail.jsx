import { Link } from "react-router-dom"
import { RiArrowLeftSLine } from "react-icons/ri";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ id, name, img, description, category, stock, price, changes, setChanges }) => {

    return (
        <section className="overflow-hidden bg-white py-11 font-parrafo dark:bg-gray-800">
            <div className="max-w-6xl px-4 mx-auto md:px-3 text-lg font-medium flex items-center gap-3 pb-5">
                <RiArrowLeftSLine />
                <Link to={"/"}>
                    <p className="">Volver</p>
                </Link>
            </div>
            <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6 rounded-xl border border-secondary">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="sticky top-0 z-50 overflow-hidden border-r border-secondary ">
                            <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                <img
                                    src={img}
                                    alt="Imagen del producto"
                                    className="object-cover w-full lg:h-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 mt-4">
                        <div className="lg:pl-10">
                            <div className="mb-8 ">
                                <span className="text-lg font-medium text-primary uppercase">{category}</span>
                                <h2 className="max-w-xl mt-3 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl font-titulo">
                                    {name}
                                </h2>
                                <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                    <span>${price - (price / 20)}</span>
                                    <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400 ml-3">
                                        ${price}
                                    </span>
                                </p>
                                <p className="max-w-md mb-8 text-accent font-parrafo text-lg">
                                    {description}
                                </p>
                                <p className="text-primary font-titulo2 text-lg">{stock} unidades disponibles</p>
                            </div>
                            <div className="w-full mb-8 flex justify-center  flex-col">
                                <label
                                    className="w-32 text-xl font-semibold text-gray-700 dark:text-gray-400"
                                >
                                    Cantidad
                                </label>
                                <ItemCount stock={stock} item={{ id, name, img, description, category, price }} changes={changes} setChanges={setChanges} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
