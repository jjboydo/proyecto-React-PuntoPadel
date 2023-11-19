import { Link } from "react-router-dom"

export const Item = ({ id, name, img, description, category, price }) => {
    return (
        <div className="wrapper bg-gray-400 antialiased text-gray-900 w-1/3 grid place-items-center mt-10">
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
                            <button className="bg-back rounded-md mt-4 before:ease relative h-12 w-40 overflow-hidden border border-accent shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-primary before:transition-all before:duration-300 hover:text-back hover:shadow-black hover:before:-rotate-180">
                                <span className="relative z-10 font-titulo2 font-semibold text-md">Ver producto</span>
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
