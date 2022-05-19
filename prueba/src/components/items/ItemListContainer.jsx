import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom' 
import ItemList from './ItemList'
import s from './ItemListContainer.module.css'
import {collection, getDocs, getFirestore} from "firebase/firestore"

export default function ItemListContainer() {
  const [items, setItems] = useState([])
  const {categoriaId} = useParams();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)



  useEffect(()=>{
    setLoading(true)
    const db = getFirestore();

    const productos = collection(db, "productos")

    getDocs(productos).then((res)=>{
      console.log(res.docs)
      setItems(res.docs.map((item)=>({id: res.id, ...item.data()})))
    })
    .catch(()=>{
      console.log(error)
      setError(true)
    })
    .finally(()=>{
      setLoading(false)
    })

  },[categoriaId])


  if (error) return <>Ocurrio un error al cargar productos, refresca la pagina!</> 
    return (
    <>
    <div className={s.loading}>{loading ? "cargando productos..." : ""}</div>
    
    <div className={s.card}>
    <ItemList productos={items}/>
    </div>
  
    </>
  )
}

 