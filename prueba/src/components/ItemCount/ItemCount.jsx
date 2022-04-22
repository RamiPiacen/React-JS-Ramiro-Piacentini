import React, { useState } from 'react'
import { Button } from '@mui/material'
import s from './ItemCount.module.css'


export default function ItemCount({stock}) {
  const [contador, setContador] = useState(1)
  
  function agregar(){
      if(contador < stock){
    setContador(contador + 1)}
  }
  
  function restar(){
    if(contador > 0){
    setContador(contador - 1)}
  }

  function onAdd(){
    alert("agregaste "+ contador + " al carrito")
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
    <Button  onClick={onAdd} variant="contained">Comprar</Button>
    </div>
    </div>

     
    </>  
  )
}

