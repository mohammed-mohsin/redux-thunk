import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
} from "../constants/postConstants";

export const postReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { loading: true, posts: [] };
      break;

    case GET_POSTS_SUCCESS:
      return { loading: false, posts: action.payload };
      break;
    case GET_POSTS_FAIL:
      return { loading: false, posts: action.payload };
      break;

    default:
      return state;
      break;
  }
};
