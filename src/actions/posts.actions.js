import * as api from "../api";

export const getPosts=()=> async (dispatch) => {
    try{
        const {data} = await api.getPosts();
        console.log(data.data);
        dispatch ({
            type: "FETCH_ALL", 
            payload: data.data
        });
    }

    catch(err){
        console.log(err);
    }
}

// export const getPost = (id) => async (dispatch) => {
//   try {
//     await api.getPost(id);
//     dispatch({
//       type: 'FETCH_ALL',
//       payload: data.data,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const addPost = (newPost) => async (dispatch) => {
  try {
    await api.addPost(newPost);
    const {data} = await api.getPosts();
    dispatch({
      type: "ADD_POST",
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    await api.updatePost(id, updatedPost);
    const { data } = await api.getPosts();
    dispatch({
      type: 'ADD_POST',
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const delPost = (id) => async (dispatch) => {
  try {
    await api.delPost(id);
    const {data} = await api.getPosts();
    dispatch({
      type: 'DELETE_POST',
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

//comments


export const getComments = () => async (dispatch) => {
  try {
    const { data } = await api.getComments();
    dispatch({
      type: 'FETCH_ALL',
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addComment = (postId, newComment) => async (dispatch) => {
  try {
    await api.addComment(postId, newComment);
    const { data } = await api.getPosts();
    dispatch({
      type: 'ADD_POST',
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// export const updateComment =  (postId, commentId, updatedComment) => async (dispatch) => {
//     try {
//       await api.updateComment(postId, commentId, updatedComment);
//       const { data } = await api.getComments();
//       dispatch({
//         type: 'ADD_POST',
//         payload: data.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

// export const delComment = (postId, commentId) => async (dispatch) => {
//   try {
//     await api.delComment(postId, commentId);
//     const { data } = await api.getComments();
//     dispatch({
//       type: 'DELETE_POST',
//       payload: data.data,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const addVote = (postId, vote) => async (dispatch) => {
  try {
    await api.addVote(postId, vote);
    const { data } = await api.getPosts();
    dispatch({
      type: 'FETCH_ALL',
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};