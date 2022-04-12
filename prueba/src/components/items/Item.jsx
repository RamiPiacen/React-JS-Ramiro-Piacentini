import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';

export default function Item({id, producto, precio, imagen}) {
  return (
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {precio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

          <ItemCount stock={10}/>

      </CardActions>
    </Card>
  );
}