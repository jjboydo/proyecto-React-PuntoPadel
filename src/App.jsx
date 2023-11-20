import { ItemDetailContainer, ItemListContainer, Navbar } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}
