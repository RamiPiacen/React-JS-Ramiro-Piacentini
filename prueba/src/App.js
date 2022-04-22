import React from "react";
import "./App.css";
import NavBar from "./components/NavBar"; 
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from "./Detail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
 

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/category/:id" element={<ItemListContainer/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>       
      </BrowserRouter>

    </>
  );
}


