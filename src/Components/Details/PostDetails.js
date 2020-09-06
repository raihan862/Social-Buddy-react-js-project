import React, { useContext } from 'react';
import { useParams } from 'react-router';
import Comment from './Comment';
import { AllPost } from '../../App';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useStyles } from '../Body/postStyle';

const PostDetails = () => {
    const classes = useStyles();
    const { postId } = useParams();
    const [posts] = useContext(AllPost);

    const post = posts.filter(p => p.id == postId)


    return (

        <>
            {
                post.map(post =>
                    <Card className={classes.root} key={post.id}>
                        <div className={classes.details}>
                            <CardMedia className={classes.cover} >
                                <Button disabled className={classes.idbutton} style={{ color: "white" }}> {post.id} </Button>
                            </CardMedia>

                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5" style={{ color: "blue" }}>
                                    {post.title}
                                </Typography>
                                <h4>User Id :{post.userId}</h4>
                                <h4 style={{ color: "purple" }}>Post  Body</h4>
                                <h5>{post.body}</h5>
                            </CardContent>
                        </div>
                    </Card>
                )
            }

            <Comment postId={postId}></Comment>




        </>
    );
};

export default PostDetails;