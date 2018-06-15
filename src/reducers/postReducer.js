export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return state.concat([action.user]);
    case 'DELETE_POST':
      return state.filter((post)=>post.id !== action.id);
    case 'EDIT_POST':
      return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post);
    case 'UPDATE_TABLE':
      return state.map((post)=>{
        if(post.id === action.id) {
          return {
             ...post,
             name:action.data.name,
             title:action.data.title,
             message:action.data.message,
             editing: !post.editing
          }
        } else return post;
      })
    default:
      return state;
  }
};