import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import s from "./NavBar.module.css"
import  Icon  from './Icon';
import { context } from '../Context/CartContext';
import { useContext } from 'react';
import productos from './utils/productos';
export default function DenseAppBar() {
  const {x} = useContext(context)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={s.nav}  variant="dense">
        <Link to="/">
          <Typography  variant="h6" color="inherit" component="div">
            <img className={s.imagen} src="https://cdn.pixabay.com/photo/2013/10/01/10/29/ebay-189064_960_720.png" alt="logo" />
          </Typography>
          </Link>

          <Link to="Computadoras">
          <Typography variant="h6" color="inherit" component="div">
            Computadoras
          </Typography>
          </Link>

          <Link to="Teclados">
          <Typography variant="h6" color="inherit" component="div">
            Teclados
          </Typography>
          </Link>

          <Link to="Auriculares">
          <Typography variant="h6" color="inherit" component="div">
            Auriculeres
          </Typography>
          </Link>

          <Link to="Mouses">
          <Typography variant="h6" color="inherit" component="div">
            Mouses
          </Typography>
          </Link>

          <Link to="/cart">
            <Icon cant={productos.length}/>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}