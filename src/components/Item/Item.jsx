import { Link } from "react-router-dom"
import { Button } from "../Button/Button"

export const Item = ({ id, name, img, description, category, price }) => {
    if(category !== "indumentaria") {
        category = "paleta"
    }
    return (
        <div className="wrapper bg-gray-400 antialiased text-gray-900 px-8 grid place-items-center mt-10">
            <div>

                <img src={img} alt="Imagen Producto" className="object-cover object-center rounded-lg shadow-xl w-96 h-[500px] border-[2px] border-secondary" />

                <div className="relative px-4 -mt-16 w-96">
                    <div className="bg-secondary p-6 rounded-lg shadow-lg min-h-[307px] flex flex-col">
                        <div className="flex items-baseline flex-1">
                            <div className="ml-1 text-gray-600 uppercase text-xs font-semibold tracking-wider text-primary font-parrafo">
                                {category}
                            </div>
                        </div>

                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate whitespace-normal font-titulo flex-1">{name}</h4>

                        <div className="mt-1 font-titulo2 text-lg flex-1">
                            $ {price}
                        </div>
                        <div className="mt-4 flex-1">
                            <span className="text-accent text-md font-semibold font-parrafo">{description}</span>
                        </div>
                        <Link to={`/item/${id}`}>
                            <Button content="Ver producto"/>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}