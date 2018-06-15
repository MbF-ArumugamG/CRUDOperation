import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { addPostAction } from '../actions/createTabelAction';

class PostForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		const name = this.getName.value;
		const title = this.getTitle.value;
    	const message =  this.getMessage.value;
    	const data = {
			id: new Date().getTime().toString(),
			name,
			title,
			message,
			editing:false
	    }
	    this.props.addPostAction(data);
	    this.getName.value = '';
	    this.getTitle.value = '';
    	this.getMessage.value = '';
	}
	render() {
		return (
			<div>
			  <h1>Create Table</h1>
			  <form onSubmit={this.handleSubmit}>
				   <input required type="text" ref={(input)=>this.getName = input} placeholder="Name" /><br /><br />
				   <input required type="text" ref={(input)=>this.getTitle = input} placeholder="Title" /><br /><br />
				   <textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28" placeholder="Description" /><br /><br />
				   <button>Add</button>
			  </form>
			</div>
		);
	}
}
PostForm.propTypes = {
    addPostAction: PropTypes.any
};
export default connect(null, {addPostAction})(PostForm);