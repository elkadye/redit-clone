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
import Add from '../components/addComment';
import DetailsPostCard from '../components/DetailsPostCard';

export default function PostDetails() {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const [post, setPost] = useState({});

  function getPost(id) {
    console.log(posts);
    const post = posts.filter(function (el) {
      return +el.id === +id;
    })[0];
    return post || {};
  }

  useEffect(() => {
    const x = getPost(id);
    setPost(x);
    console.log(posts);
  }, [posts]);

  //  const comments = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <>
      <Grid container mt={5}>
        <Grid item xs={0} md={3} />

        <Grid item xs={12} md={6}>
          <Grid container direction="column">
            <Grid item>
              <DetailsPostCard post={post} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={0} md={3} />
      </Grid>
      {/* <React.Fragment>
        <CssBaseline />
      
      </React.Fragment> */}
    </>
  );
}
