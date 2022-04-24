import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import customFetch from '../utils/CustomFetch'
import productos from '../utils/productos'
import ItemList from './ItemList'
import s from './ItemListContainer.module.css'

export default function ItemListContainer() {
  console.log(productos)
  const [items, setItems] = useState([])
  const {id} = useParams();
  
  useEffect(()=>{

  customFetch(1000,productos)
    .then(resultado => setItems(resultado))
    .catch(error => console.log(error))
  },[id])

    return (
    <>
    <div className={s.card}>
    <ItemList productos={items}/>
    </div>
  
    </>
  )
}

 