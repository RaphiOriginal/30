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
          <SignUp>
            <Text>Ich, <Input className="input-line" placeholder="Name" />, <Dropdown className="input-select" list={["werde gerne", "kann nicht"]} title="will" /> teilnehmen.</Text>
          </SignUp>
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

class SignUp extends Component {
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

class Dropdown extends Component {
  constructor(props){
    super(props);
    this.state={
      listOpen: false,
      headerTitle: this.props.title
    };

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  handleClickOutside(){
    this.setState({listOpen: false});
  }

  toggleList(){
    this.setState(prevState => ({listOpen: !prevState.listOpen}))
  }

  render(){
    return (
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-title">{this.props.headerTitle}</div>
          {this.state.listOpen
            ? <p>a</p>
            : <p>b</p>
          }
        </div>
        {this.state.listOpen && <ul className="dd-list">
          {this.props.list.map((item) => (<li className="dd-list-item" key={item}>{item}</li>))}
        </ul>}
      </div>
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
