import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import EditeComponent from './EditeComponent';
import { erraseAction } from '../actions/deleteTable';
import { editeAction } from '../actions/editeAction';

class Post extends Component {
	handleEdit = (id) => {
    	this.props.editeAction(id);
  	}
  	handleDelete = (id) => {
    	this.props.erraseAction(this.props.post[id].id);
  	}
	render() {
		const { post } = this.props;
		const addTable = post.map((post, id) => {
      	return <tr key={id}>
      		<td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.title}</td>
            <td >{post.message}</td>
            <Dialog open={post.editing}><EditeComponent post={post} key={id} /></Dialog>
            <td><button className="edit" onClick={this.handleEdit.bind(this, post.id)}>Edit</button></td>
            <td><button className="delete" onClick={this.handleDelete.bind(this, id)}>Delete</button></td>
          </tr>
        });
		return( 
			this.props.post.length> 0 ?
			<div className="post">
				<table>
					<thead>
					    <tr>
					    	<th width="25%">id</th>
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
			</div>: <h1>No data</h1>
		);
	}
}

Post.propTypes = {
    erraseAction: PropTypes.any,
    editeAction: PropTypes.any
};

const mapStateToProps = state => {
  return {
    post: state
  };
};


export default connect(mapStateToProps, { erraseAction, editeAction })(Post);