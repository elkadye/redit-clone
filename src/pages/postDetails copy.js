// export default function Home() {
//   return (
//     <main style={{ padding: "1rem 0" }}>
//       <h2>Single Post Details</h2>
//     </main>
//   );
// }
import * as api from '../api';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as React from 'react';
import getPost from '../actions/posts.actions';
import { CssBaseline, Box, Container, Typography, Grid } from '@mui/material';
import Comment from '../components/commentCard';
import Add from '../components/addComment';

export default function Showblogs() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [post, setPost] = useState({});

  // const posts = useSelector((state) => state.posts);
async function fetchPost(id){
   const post=  await api.getPost(id);
   return post
  }
  useEffect(() => {
    setPost(fetchPost(id))
    console.log(post)
  }, []);

  // function getPost(id) {
  //
  //   const post = posts.filter(function (el) {
  //     return +el.id === +id;
  //   })[0];
  //   return post || {};
  //   // setPost(post || {});

  //   // const post = posts.filter(function (el) {
  //   //   return +el.id === +id;
  //   // });

  //   // console.log(post);
  //   // console.log(id);
  // }

  // useEffect(() => {
  //   const x = getPost(id);
  //   setPost(x);
  // }, []);

  // useEffect(() => {
  //   const x = getPost(id);
  //   setPost(x);
  // }, [posts]);

  //  useEffect(() => dispatch(getComments(postId)), [posts]);

  //  const comments = useSelector((state) => state.posts);

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container>
          <img src={'https://picsum.photos/600/300'}></img>
          <h3>{post.title}</h3>

          {/* {JSON.stringify(post)} */}
          <p> {post.body}</p>
          <Grid container sx={{ margin: 1 }} spacing={3}>
            {post?.comments?.map((comment) => (
              <Grid key={comment.id} item xs={12}>
                {' '}
                <Comment comment={comment} />
              </Grid>
            ))}
          </Grid>
          <Box>
            <Add postId={post.id} />
          </Box>
        </Container>
      </React.Fragment>

      {/* <h3>{post.title}</h3> */}
      {/* <h2 className="py-5">Show Single Post</h2>
      <h3>{post.title}</h3>
      <Container>
        <Row>
          <Col className="blog-card" md={4} key={post.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.blogShortText}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}
