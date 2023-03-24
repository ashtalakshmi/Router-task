import React, { Component } from 'react';
import {Card,CardContent,Toolbar,Typography,Button,CardActions} from '@mui/material';
 


class Content1 extends Component{

    render(){
        return(
            <>
            <div className="row">
            <div className="col-lg-3">
            </div>
            <div className="col-lg-6 content1">
            <Card sx={{ maxWidth: 345 }}>
            <Toolbar>
        <img src="./images/ancient.jpg" alt="logo"  />
      </Toolbar>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </div>
            <div className="col-lg-3">
            </div>
            </div>
            
            </>
        )
    }
}
export default Content1;