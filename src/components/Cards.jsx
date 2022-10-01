import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Cards({type,title}) {
  return (
    <div className='container mt-3'>
    <h4>{title}</h4>
    <div className='row'>
    {type.map((value)=>{
      return(
        <div key={value.id} className="col-3 mt-3 mb-3">
        
    <Card sx={{ maxWidth: 100,maxHeight:60 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="80"
        image={`https://image.tmdb.org/t/p/w500${value.backdrop_path}`}
        alt="not found"
      />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        </CardContent>
  </Card>
        </div>
      )
    })}
    </div>
  </div>
  )
}

export default Cards
