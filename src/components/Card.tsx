import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';

export interface CardContent {
    title: string;
    count: number | undefined;
    subTitle: string;
    lastUpdate: string;
}

const CustomCardContent = (props: CardContent) => (
  <React.Fragment>
    <CardContent sx={{padding: 0, margin: 0, position: 'relative'}}>
      <Typography 
        sx={{ 
          fontSize: 16, 
          bgcolor: '#9398a3',
          color: 'white',
          padding: '10px',
        }} 
        color="text.secondary" 
        component="div"
        gutterBottom>
        {props.title}
        <CardActions sx={{padding: 0, position: 'absolute', top: 0, right: 0}}>
          <IconButton aria-label="add to favorites" onClick={() => alert('Add to Favorite not implemented :)')}>
            <FavoriteIcon sx={{ color: '#c52121' }} />
        </IconButton>
      </CardActions>
      </Typography>
      <Typography variant="h5" component="div" sx={{marginTop: '20px'}}>
        {props?.count?.toLocaleString() || 0}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" component="div">
        {props.subTitle} cases
      </Typography>
      <Typography sx={{ mb: 0, fontSize: 12}} color="text.secondary" component="div">
        Last updated {new Date(props.lastUpdate).toLocaleDateString()}
      </Typography>
    </CardContent>
  
  </React.Fragment>
);

export const CovidCard = (props: CardContent) => {
  return (
    <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
            <CustomCardContent {...props} />
        </Card>
    </Box>
  );
};