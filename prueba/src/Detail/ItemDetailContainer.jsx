import React, { useEffect, useState } from "react";
import { traerProducto } from "../components/utils/productos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

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
      setProducto({id:"1",name:"auriculares"})
    }else if(producto === "teclado"){
      setProducto({id:"2",name:"teclado"})
    }
  }, [id])
  

  return (
    <>
      {producto.name+ " " + producto.id}
      <ItemDetail producto={producto} />
    </>
  );
}
