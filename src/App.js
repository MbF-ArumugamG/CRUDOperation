import React, { Component } from 'react';
import PostForm from './component/PostForm';
import AllPost from './component/AllPost';
import './App.css';

class App extends Component {
  render() {
    return (
     <div className="App">
        <PostForm />
        <AllPost />
      </div>
    );
  }
}

export default App;
