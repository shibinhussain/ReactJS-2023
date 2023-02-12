import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://rickandmortyapi.com/api/character/avatar/380.jpeg"
          title="rick and morty"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Rick and Morty
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rick and Morty is a television show. You will have access to about
            hundreds of characters, images, locations and episodes in this site.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
