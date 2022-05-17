import React from 'react';
import { useState, useContext } from 'react';
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

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { addComment } from '../actions/posts.actions';


export default function Add({ postId }) {
console.log(postId)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      body: '',
      userId: 3,
      //   image: '',
    },
    validationSchema: Yup.object({
      body: Yup.string()
        .max(250, 'Must be 250 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      //   const id = Date.now();
      //   const post = { ...values, id };
      dispatch(addComment(postId, values));
      console.log(postId)
      formik.resetForm();
    },
  });
  return (
    <>
        <Box >
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            
            <TextField
              error={Boolean(formik.errors.body) && formik.touched.body}
              helperText={formik.errors.body}
              autoFocus
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.body}
              name="body"
              id="body"
              fullWidth
              lable="comment"
            />
          </FormControl>
          <Button type="submit" >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
}
