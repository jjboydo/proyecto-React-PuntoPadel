import { ItemListContainer, Navbar } from "./components"


export const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a Punto Padel! Paletas e indumentaria de élite para tu juego."} />
    </>
  )
}
