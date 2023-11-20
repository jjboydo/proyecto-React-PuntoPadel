
export const Button = ({content = "Button", functionClick}) => {
    return (
        <button onClick={functionClick} className="bg-back rounded-md mt-4 before:ease relative h-12 w-40 overflow-hidden border border-accent shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-primary before:transition-all before:duration-300 hover:text-back hover:shadow-black hover:before:-rotate-180">
            <span className="relative z-10 font-titulo2 font-semibold text-md">{ content }</span>
        </button>
    )
}
