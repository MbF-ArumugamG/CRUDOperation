import 'whatwg-fetch';
export const ADD_POST = 'ADD_POST';

export function addPost(user) {
  return {
    type: ADD_POST,
    user,
  };
}

export function addPostAction(user) {
  return dispatch => dispatch(addPost(user));
}

