import * as React from 'react';
import { Button, Badge, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

import { useState, useContext } from 'react';

// import { PostsContext } from "./Context";
import { useDispatch, useSelector } from 'react-redux';
import { delPost } from '../actions/posts.actions';
import { addVote } from '../actions/posts.actions';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import EditModal from './editModal';
import Comment from './commentCard';
import Add from './addComment';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  //   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard({ post }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch();
  //   Functions
  function vote(v) {
    const vote = {
      userId: '007',
      userVote: v,
    };
    dispatch(addVote(post.id, vote));
    console.log(vote);
  }
  function deletePost() {
    dispatch(delPost(post.id));
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post.id}
          </Avatar>
        }
        title={post.userId}
        subheader={post.updatedAt}
      />
      <CardMedia
        component="img"
        // height="300"
        image="https://picsum.photos/600/300"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container sx={{ marginTop: 2 }} spacing={2}>
          <Grid item xs={2}>
            <Button
              startIcon={<ThumbUpIcon size="large" color="action" />}
              onClick={() => vote('1')}>
              {post.upVotesTotal}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              startIcon={<ThumbDownAltIcon size="large" color="action" />}
              onClick={() => vote('-1')}>
              {post.downVotesTotal}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              // onClick={handleExpandClick}
              size="large"
              startIcon={<CommentIcon size="large" color="action" />}>
              {post.commentsTotal}
            </Button>
          </Grid>
        </Grid>
      </CardActions>

      <CardContent>
        <Grid container sx={{ margin: 1 }} spacing={2}>
          {post?.comments?.map((comment) => (
            <Grid key={comment.id} item xs={10}>
              {' '}
              <Comment comment={comment} />
            </Grid>
          ))}
          <Grid item xs={10}>
            <h3>Add a comment</h3>
            <Box>
              <Add postId={post.id} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
