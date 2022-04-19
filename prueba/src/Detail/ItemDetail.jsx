import React from "react";
import s from "./ItemDetail.module.css"
import ItemCount from "../components/ItemCount/ItemCount"

export default function ItemDetail({ producto }) {
  return (
    <>
      <div className={s.detalle}>
        <img className={s.imagen} src={producto.imagen} alt={producto.name} />
        <div>
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <h3>{producto.precio}</h3>
          <p>stock: {producto.stock}</p>
          <ItemCount stock={5}/>
        </div>
      </div>
    </>
  );
}
