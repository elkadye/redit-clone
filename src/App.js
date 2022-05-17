import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import NavBar from "./components/nav"
import Posts from './pages//Home';
import PostDetails from './pages/postDetails';

import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getPosts} from "./actions/posts.actions"

function App() {
   const dispatch = useDispatch();
  const posts = useSelector(state => state.posts)
  console.log(posts)
   useEffect(() => dispatch(getPosts()), []);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
