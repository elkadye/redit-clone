import * as api from "../api";

export const getComments=()=> async (dispatch) => {
    try{
        const {data} = await api.getComments();
        dispatch ({
            type: "FETCH_ALL", 
            payload: data.data
        });
    }

    catch(err){
        console.log(err);
    }
}

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