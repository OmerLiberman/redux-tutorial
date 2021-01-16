import {FETCH_POSTS, NEW_POST} from './types';

import axios from 'axios'

export const fetchPosts = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => 
      dispatch({
        type: FETCH_POSTS,
        payload: res.data
      }));
}

export const createPost = (data) => dispatch => {
  axios.post('https://jsonplaceholder.typicode.com/posts', data)
  .then(res => 
    dispatch({
      type: NEW_POST,
      payload: res.data
    }));
}