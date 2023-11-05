
export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="flex justify-center mt-16 font-titulo" > 
        <h2 className="w-5/12 text-center text-xl sm:text-3xl xl:text-4xl  bg-primary rounded-3xl p-8 text-secondary"> { greeting } </h2>
    </div>
  )
}
