import React, { useEffect, useState } from "react";
import { traerProducto } from "../components/utils/productos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import customFetch from "../components/utils/CustomFetch";

export default function ItemDetailContainer() {

  const [producto, setProducto] = useState({});

  useEffect(() => {

    traerProducto()
    .then((res)=>{
      setProducto(res)
    })
    .catch("error")

  }, []);
  
  const {id} = useParams()

  useEffect(() => {
    if(producto === "auriculares"){
      customFetch(producto.id)
    }else if(producto === "teclado"){
      setProducto({id:"002",name:"teclado"})
    }
  }, [id])
  

  return (
    <>
      {producto.name+ " " + producto.id}
      <ItemDetail producto={producto} />
    </>
  );
}
