import React, { Component } from 'react';
import PostForm from './component/PostForm';
import Post from './component/Post';
import './App.css';

class App extends Component {
  render() {
    return (
     <div className="App">
        <PostForm />
        <Post />
      </div>
    );
  }
}

export default App;
