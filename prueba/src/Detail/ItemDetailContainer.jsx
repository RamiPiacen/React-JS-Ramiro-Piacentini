import React, { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore"
export default function ItemDetailContainer() {

  const [producto, setProducto] = useState({});
  const {id} = useParams()
   


  
 useEffect(()=>{
  
 const db = getFirestore();

 const itemRef = doc(db, "productos", id)

 getDoc(itemRef).then((res)=>{
  setProducto({id: res.id, ...res.data()})

 })
 },[id])



  return (
    <>
      {producto.id ? <ItemDetail producto={producto} /> : ""}
      
    </>
  );
}
