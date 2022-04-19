import React, { useEffect, useState } from "react";
import { traerProducto } from "../components/utils/productos";
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {

  const [producto, setProducto] = useState({});

  useEffect(() => {

    traerProducto()
    .then((res)=>{
      setProducto(res)
    })
    .catch("error")

  }, []);
 
  return (
    <>
      <ItemDetail producto={producto} />
    </>
  );
}
