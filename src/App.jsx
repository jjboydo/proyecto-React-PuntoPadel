import { Cart, Checkout, Footer, ItemDetailContainer, ItemListContainer, Navbar } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"

export const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}
