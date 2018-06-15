import 'whatwg-fetch';
export const DELETE_POST = 'DELETE_POST';

export function deleteTable(id) {
  return {
    type: DELETE_POST,
    id,
  };
}

export function erraseAction(id) {
  return dispatch => dispatch(deleteTable(id));
}

