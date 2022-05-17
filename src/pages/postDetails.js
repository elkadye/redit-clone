// export default function Home() {
//   return (
//     <main style={{ padding: "1rem 0" }}>
//       <h2>Single Post Details</h2>
//     </main>
//   );
// }
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as React from 'react';

import { CssBaseline, Box, Container, Typography, Grid } from '@mui/material';
import Comment from '../components/commentCard';
import Add from '../components/addComment'
import PostCard from '../components/HomePostCard';

export default function PostDetails() {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  console.log(posts)
  const [post, setPost] = useState({});
  
  
  
  function getPost(id) {
    console.log(posts)
    const post = posts.filter(function (el) {
      return +el.id === +id;
    })[0];
    return post || {};
  }

  useEffect(() => {
    const x = getPost(id);
    setPost(x);
    console.log(posts)
  }, [posts]);

  //  const comments = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <>
      <Grid container mt={5}>
        <Grid item xs={0} md={3}/>
         

        <Grid item xs={12} md={6}>
          <Grid container direction="column">
            <Grid item>
              <PostCard post={post} />
            </Grid>
            <Grid item>
              <Grid container sx={{ margin: 1 }} spacing={3}>
                {post?.comments?.map((comment) => (
                  <Grid key={comment.id} item xs={12}>
                    {' '}
                    <Comment comment={comment} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={0} md={3}/>
      </Grid>
      <React.Fragment>
        <CssBaseline />
        <Container>
          {/* <img src={'https://picsum.photos/600/300'}></img> */}
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
