import React, { useState } from 'react'
import { Button } from '@mui/material'
import s from './ItemCount.module.css'
import { Link } from 'react-router-dom'


export default function ItemCount({stock, id, onAdd}) {
  const [contador, setContador] = useState(0)
  
  function agregar(){
      if(contador < stock){
    setContador(contador + 1)}
  }
  
  function restar(){
    if(contador > 0){
    setContador(contador - 1)}
  }

  
  return (
    <>
    <div className={s.contenedor}>
    <div className={s.botones}>
    <Button className={s.boton} onClick={restar} variant="contained"color="error">-</Button>
    <p>{contador}</p>
    <Button onClick={agregar} variant="contained"color="success">+</Button>
    </div>
    <div className={s.comprar}>
      <Link to={"/item/" + id}><Button  onClick={onAdd} variant="contained">Comprar</Button></Link>
    
    </div>
    </div>

     
    </>  
  )
}

