import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './detailsStyle';
import './comment.css'


const Comment = ({ postId }) => {
    const classes = useStyles();
    const [comments, setComments] = useState([]);
    const [friends, setfriends] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?postId=" + postId)
            .then(response => response.json())
            .then(data => {
                setComments(data)

                return fetch("https://randomuser.me/api/?results=" + data.length)
            })
            .then(response2 => response2.json())
            .then(pic => {
                setfriends(pic.results)

            })

    }, [])

    let count = 0;
    let images = [];
    friends.map(pic => {
        images.push(pic.picture.medium)
    })

    return (
        <>
            {

                comments.map(comment =>

                    <Card className={classes.root} key={comment.id}>
                        <div className={classes.deatils}>
                            <CardMedia className={classes.cover} >
                                <img style={{ marginTop: "0px", borderRadius: "50%" }} src={images[count++]} alt="" />
                            </CardMedia>

                            <div className="email">
                                <h5>{comment.email}</h5>
                            </div>
                        </div>
                        <small className="comment_body" >{comment.body}</small>
                    </Card>
                )
            }
        </>
    );
};

export default Comment;