import React,{useEffect, useState} from 'react'

export default function Formulario() {

    const [nombre, setNombre] = useState()
    const [email, setEmail] = useState()
    const [telefono, setTelefono] = useState()

    function terminarCompra(){
        alert("quiere terminar la compra" + nombre + email + telefono)
    }
    useEffect(()=>{
        console.log(nombre, email, telefono)
    },[nombre, email, telefono])
  return (
      <>
      <input type={"text"} 
      value={nombre} 
      onChange={(e)=>{
          setNombre(e.currentTarget.value)
      }}
      />
      <input type={"text"} 
      value={email} 
      onChange={(e)=>{
          setEmail(e.currentTarget.value)
      }}
      />
      <input type={"text"} 
      value={telefono} 
      onChange={(e)=>{
          setTelefono(e.currentTarget.value)
      }}
      />
      </>
  )
}

