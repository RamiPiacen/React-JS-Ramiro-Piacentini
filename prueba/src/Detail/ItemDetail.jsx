import React from "react";
import s from "./ItemDetail.module.css"
import ItemCount from "../components/ItemCount/ItemCount"
import { useContext } from "react";
import { context } from "../Context/CartContext";
export default function ItemDetail({ producto }) {

    const {addItem} = useContext(context)


  return (
    <>
      <div className={s.detalle}>
        <div>
        <img className={s.imagen} src={producto.imagen} alt={producto.name} />
        </div>
        <div>
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <h3>{producto.precio}</h3>
          <p>stock: {producto.stock}</p>
          <ItemCount onAdd={addItem}stock={producto.stock}/>
        </div>
      </div>
    </>
  );
}
