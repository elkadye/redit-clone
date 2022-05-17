import React from 'react';
import { useEffect } from 'react';

import {
  InputLabel,
  Input,
  FormHelperText,
  FormControl,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
  Box,
  Card, CardTitle, CardContent, Grid, CardActions, CardHeader, Avatar
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
// import { PostsContext } from "./Context";
import { useDispatch, useSelector } from 'react-redux';
// import { delComment } from '../actions/posts.actions';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { addComment} from '../actions/posts.actions';
import { getComments } from '../actions/posts.actions.js';

import { delPost } from '../actions/posts.actions';
import { addVote } from '../actions/posts.actions';


export default function Comment ({ comment }) {
    
  
 
   const dispatch = useDispatch();
   //   Functions
   function vote(v) {
     const vote = {
       userId: '007',
       userVote: v,
     };
    //  dispatch(addVote(post.id, vote));
     console.log(vote);
   }
   function deletePost() {
    //  dispatch(delPost(post.id));
   }

  return (
    <>
      <Card>
        <CardHeader
          // avatar={<Avatar aria-label="recipe">{comment.userId}</Avatar>}
          avatar= {<Avatar src='https://i.pravatar.cc/300'/>}
          title={comment.id}
          // subheader={post.updatedAt}
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            {comment.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Grid container sx={{ marginTop: 2 }} spacing={2}>
            <Grid item xs={2}>
              <Button
                startIcon={<ThumbUpIcon size="small" color="action" />}
                onClick={() => vote('1')}>
                {/* {post.upVotesTotal} */}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                startIcon={<ThumbDownAltIcon size="small" color="action" />}
                onClick={() => vote('-1')}>
                {/* {post.downVotesTotal} */}
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
}
