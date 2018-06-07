import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		const name = this.getName.value;
		const title = this.getTitle.value;
    	const message =  this.getMessage.value;
    	const data = {
			id: new Date(),
			name,
			title,
			message,
			editing:false
	    }
	    this.props.dispatch({
	    	type:'ADD_POST',
	    	data
	    });
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
export default connect()(PostForm);