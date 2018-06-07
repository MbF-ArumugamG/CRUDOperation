import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from './Dialog';
import EditComponent from './EditComponent';

class AllPost extends Component {
  render() {
    const addTable = this.props.posts.map((post, id) => {
      return <tr key={id}>
            <td>{post.name}</td>
            <td>{post.title}</td>
            <td >{post.message}</td>
            <Dialog open={post.editing}><EditComponent post={post} key={post.id} /></Dialog>
            <td><button className="edit" onClick={()=>this.props.dispatch({type:'EDIT_POST',id:post.id})}>Edit</button></td>
            <td><button className="delete" onClick={()=>this.props.dispatch({type:'DELETE_POST',id:post.id})}>Delete</button></td>
          </tr>
        });
    return (
      this.props.posts.length >0 ?
        <div className="post">
          <table>
            <thead>
                <tr>
                  <th width="25%">Name</th>
                  <th width="25%">Title</th>
                  <th width="25%">Description</th>
                  <th colSpan="2" width="25%">Option</th>
                </tr>
              </thead>
            <tbody>
              {addTable}
            </tbody>
          </table>
        </div>: <h1>NO Table</h1>
    );
   }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);