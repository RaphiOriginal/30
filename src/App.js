import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>test</Title>
        <Title>test2</Title>
      </div>
    );
  }
}

class Title extends Component {
  render(){
    return (
      <header className={this.props.classname}>{this.props.children}</header>
    )
  }
}

class Text extends Component {
  render(){
    return (
      <p className={this.props.classname}>{this.props.children}</p>
    )
  }
}

export default App;
