import { Grid } from '@mui/material';
import { useEffect } from 'react';


import { addPost, delPost } from '../actions/posts.actions';
import { useDispatch, useSelector } from 'react-redux';
import {getPosts} from "../actions/posts.actions.js";
import PostCard from '../components/HomePostCard';


export default function ShowPosts() {
  // const [posts, setPosts] = useState([]);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch()

  useEffect(() =>dispatch(getPosts()),[])
  // useEffect (()=> (console.log(posts),[posts]))

  return (
    <>
      <Grid container mt={5}>
        <Grid item  xs={1} sm={1} md={1} lg={2}sx={{ display: { xs: 'none' , sm:'none',md:'block',lg:'block',xl:'block' }}}>
          <p>left</p>
          </Grid>

        <Grid item  xs={12} md={10} lg={7}mx={2}>
          <Grid container direction="column" spacing={5}>
            {posts.map((post) => (
              <Grid item key={post.id} xs={12}>
                {' '}
                <PostCard post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={1} sm={1} md={1} sx={{ display: { xs: 'none' , sm:'none',md:'none',lg:'block',xl:'block'}}}>
          <p>right</p>
          </Grid>
      </Grid>
    </>
  );
}
