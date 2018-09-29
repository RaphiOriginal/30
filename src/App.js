import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page classname="Page">
          <Title classname="App-title">Einladung</Title>
          <Details>
            <Detail header="Datum" info="30.11.2018" />
            <Detail header="Uhrzeit" info="18:00" />
            <Detail header="Ort" info="Unbekannt" />
          </Details>
        </Page>
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

class Page extends Component {
  render(){
    return (
      <div className={this.props.classname}>{this.props.children}</div>
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

class Detail extends Component {
  render () {
    return (
      <tr className="detail">
        <td className="bold">{this.props.header}</td>
        <td className="paragraph">{this.props.info}</td>
      </tr>
    )
  }
}

class Details extends Component {
  render () {
    return (
      <table classname="details">{this.props.children}</table>
    )
  }
}

export default App;
