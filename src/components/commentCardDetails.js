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
  Card,
  CardTitle,
  CardContent,
} from '@mui/material';

// import { PostsContext } from "./Context";
import { useDispatch, useSelector } from 'react-redux';
// import { delComment } from '../actions/posts.actions';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { addComment } from '../actions/posts.actions';
import { getComments } from '../actions/posts.actions.js';

export default function Comment({ comment }) {
  const dispatch = useDispatch();

  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {comment.id}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={comment.userId}
          // subheader={post.updatedAt}
        />
      </Card>
      <CardContent>
        {/* <Typography variant="h6" color="text.secondary">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <Card>
        <CardContent> */}
          <Typography gutterBottom variant="p" component="div">
            {comment.body}
          </Typography>
        </CardContent>
      {/* </Card> */}
    </>
  );
}
