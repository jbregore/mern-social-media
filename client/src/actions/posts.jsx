import {
  FETCH_ALL,
  FETCH_POST,
  FETCH_BY_SEARCH,
  CREATE,
  UPDATE,
  DELETE,
  START_LOADING,
  END_LOADING,
  COMMENT
} from "../constants/actionTypes";
import * as api from "../api";

// action creators
export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts(page);

    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (e) {
    console.log(e);
  }
};

//single post
export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (e) {
    console.log(e);
  }
};

export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);

    history.push(`/posts/${data._id}`);

    dispatch({ type: CREATE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (e) {
    console.log(e);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (e) {
    console.log(e);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
    dispatch({ type: END_LOADING });
  } catch (e) {
    console.log(e);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {

    const { data } = await api.likePost(id);
    dispatch({ type: UPDATE, payload: data });

  } catch (e) {
    console.log(e);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  // console.log(searchQuery)
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    // console.log(data);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (e) {
    console.log(e);
  }
};

export const commentPost = (value, id) => async (dispatch) => {
  try{
    const {data} = await api.comment(value, id);
    
    dispatch({ type: COMMENT, payload: data})
    return data.comments;

  }catch(e){
    console.log(e);
  }
}

// export const showLoading = (value) => async (dispatch) => {
//     try {
//       localStorage.setItem("isLoading", value);
//       await dispatch({
//           type: 'LOADING',
//           payload: value
//       })
//   } catch (e) {
//       console.log(e);
//   }
// }
