import axios from "axios";
import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
} from "../constants/postConstants";
export const postAction =()=> async (dispatch) => {
  try {
    dispatch({ type: GET_POSTS_REQUEST });
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: GET_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
