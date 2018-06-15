import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateAction } from '../actions/updateAction';


class EditComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      newName: this.props.post.name,
      newTitle: this.props.post.title,
      newMessage: this.props.post.message
    };
    this.handleName = this.handleName.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }
  handleName(e) {
    this.setState({
      newName: e.target.value});
  }
  handleTitle(e) {
    this.setState({
      newTitle: e.target.value});
  }
  handleMessage(e) {
    this.setState({
      newMessage: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    const { newName, newTitle, newMessage } = this.state;
    const name = newName;
    const title = newTitle;
    const message = newMessage;
    const data = {
      name,
      title,
      message,
      editing:false
    }
    this.props.updateAction(this.props.post.id, data);
  }
  render() {
    return (
       <div>     
        <form onSubmit={this.handleSubmit}>
          <input required type="text" value={this.state.newName} onChange={this.handleName} 
          defaultValue={this.props.post.name} placeholder="Name" /><br /><br />

          <input required type="text" value={this.state.newTitle} onChange={this.handleTitle} 
          defaultValue={this.props.post.title} placeholder="Title" /><br /><br />

          <textarea required rows="5" value={this.state.newMessage} onChange={this.handleMessage} 
          defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />

          <button>Update</button>
        </form>
      </div>
      );
    }
  }

EditComponent.propTypes = {
  updateAction: PropTypes.any
};
export default connect(null, {updateAction})(EditComponent);