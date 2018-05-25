import React, { Component } from 'react';
import { connect } from 'react-redux';
class Post extends Component {
	handleEdit = (e) => {
    this.props.dispatch({ 
    	type: 'EDIT_POST', 
    	id: this.props.post.id 
    })
  }
  handleDelete = (e) => {
  	this.props.dispatch({ 
  		type: 'DELETE_POST', 
  		id: this.props.post.id 
  	})
  }
	render() {
		return (
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
				    <tr>
					    <td>{this.props.post.name}</td>
					    <td>{this.props.post.title}</td>
					  	<td >{this.props.post.message}</td>
					  	<td>
					  		<button className="edit" onClick={this.handleEdit}>
						    	Edit
						    </button>
						  </td>
					  	<td>
					  		<button className="delete" onClick={this.handleDelete}>
					  			Delete
					  		</button>
				    	</td>
			    	</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
export default connect()(Post);