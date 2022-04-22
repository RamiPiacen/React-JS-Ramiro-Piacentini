import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';

export default function Item({ producto }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={producto.imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.precio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.nombre}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

          <ItemCount stock={10}/>

      </CardActions>
    </Card>
  );
}