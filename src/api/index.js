import axios from "axios";

const API = axios.create({
    baseURL: "https://api.tawwr.com"
});

export const getPosts = ()=>API.get("/posts");
export const getPost = (id) => API.get(`/posts/${id}`);

export const addPost = (newPost)=>API.post("/posts", newPost);

export const updatePost = (id, updatedPost)=>API.put(`/posts/${id}`, updatedPost)

export const delPost = (id) => API.delete(`/posts/${id}`, id);

//Comments

export const getComments = (postId) => API.get(`/posts/${postId}/comment`);

export const addComment = (postId, newComment) => API.post(`/posts/${postId}/comment`, newComment );

export const updateComment = (postId,commentId, updatedComment) => API.put(`/posts/${postId}/comment/${commentId}`, updatedComment);

export const delComment = (postId, commentId) => API.delete (`/posts/${postId}/comment/${commentId}`);

// Votes
export const addVote = (postId, vote) => API.post(`/posts/${postId}/vote`, vote);

