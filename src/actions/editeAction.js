import 'whatwg-fetch';
export const EDIT_POST = 'EDIT_POST';

export function editeTable(id) {
  return {
    type: EDIT_POST,
    id,
  };
}

export function editeAction(id) {
  return dispatch => dispatch(editeTable(id));
}

