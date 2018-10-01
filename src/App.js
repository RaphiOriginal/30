import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page classname="Page">
          <Title classname="App-title">Einladung</Title>
          <Text classname="text">The Material Design color system uses an organized approach to applying color to your UI. In this system, a primary and a secondary color are typically selected to represent your brand. Dark and light variants of each color can then be applied to your UI in different ways.</Text>
          <Details>
            <Detail header="Datum" info="30.11.2018" />
            <Detail header="Uhrzeit" info="18:00" />
            <Detail header="Ort" info="Unbekannt" />
          </Details>
          <Form>
            <Input className="input-line" placeholder="Name" />
          </Form>
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
      <div className={this.props.classname}>{this.props.children}</div>
    )
  }
}

class Form extends Component {
  render(){
    return (
      <form>{this.props.children}</form>
    )
  }
}

class Input extends Component {

  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render(){
    return (
      <input className= {this.props.className} type="text" placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange} />
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
