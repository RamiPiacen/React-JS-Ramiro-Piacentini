import React,{createContext, useContext} from "react";
import "./App.css";
import NavBar from "./components/NavBar"; 
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from "./Detail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import CartContext from "./Context/CartContext";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Formulario from "./components/Formulario/Formulario";


export default function App() {
  return (
    <>
    <CartContext>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a mi tienda online!"/>} />
        <Route exact path="/categoria/:categoriaID" element={<ItemListContainer/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
        <Route exact path="*" element={<Error/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/formulario" element={<Formulario/>}/>
      </Routes>    
        <Footer/>
      </BrowserRouter>
      </CartContext>
    </>
  );
}


