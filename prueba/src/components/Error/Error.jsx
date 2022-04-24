import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <>
        <h2>No se encontro la pagina</h2>
        <Link to="/">Volver al inicio</Link>
    </>
  )
}
