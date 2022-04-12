import React, {useEffect, useState} from 'react'
import customFetch from '../utils/CustomFetch'
import productos from '../utils/productos'
import ItemList from './ItemList'
import s from './ItemListContainer.module.css'

export default function ItemListContainer() {
  const [items, setItems] = useState([])
  
  useEffect(()=>{
    customFetch(3000,productos)
    .then(resultado => setItems(resultado))
    .catch(error => console.log(error))
  },[])

    return (
    <>
    <div className={s.card}>
    <ItemList productos={items}/>
    </div>
  
    </>
  )
}

 