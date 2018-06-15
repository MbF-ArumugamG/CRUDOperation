import 'whatwg-fetch';
export const UPDATE_TABLE = 'UPDATE_TABLE';

export function updateTable(id, data) {
  return {
    type: UPDATE_TABLE,
    id,
    data
  };
}

export function updateAction(id, data) {
  return dispatch => dispatch(updateTable(id, data));
}

