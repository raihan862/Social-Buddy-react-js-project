import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { useContext } from 'react';
import { AllPost } from '../../App';
import { useStyles } from './postStyle';


function Post() {
    const classes = useStyles();
     
    const [posts] = useContext(AllPost);

    return (
       
           <>
                {
                    posts.map(post =>
                        <Card className={classes.root} key ={post.id}>
                        <div className={classes.details}>
                        <CardMedia className={classes.cover} >
                            <Button disabled className={classes.idbutton} style={{ color: "white" }}> {post.id} </Button>
                        </CardMedia>

                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5" style ={{color:"blue"}}>
                                {post.title}
                            </Typography>               
                            
                           <h5>{post.body.slice(0,100)+"......"}</h5>
                             <Link to ={'/show-details/'+post.id} style = {{textDecoration: "none"}}>
                                 <Button variant="contained" color="secondary">Show Details</Button> 
                             </Link>
                            
                        </CardContent>
                        </div>
                        </Card>
                    )
                }


           

       </>
    );
}
export default Post;