import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page classname="Page">
          <Title classname="App-title">Einladung</Title>
          <div classname="text">Gerne lade ich dich/euch zu meinem 30. Geburtstag ein. Gefeiert wird in meiner alten Heimat.</div>
          <div classname="text">Ausser gute Laune braucht ihr nichts mit zu bringen. Alkoholfreie Getränke und eine Auswahl an Cocktails werden zur verfügung gestellt.</div>
          <div classname="text">Für das Bier müsst ihr jedoch selber aufkommen.</div>
          <div classname="text">Für Personen mit einem längeren Nachhause weg, gäbe es noch die Option im <a className="link" href="https://www.gasthof-kreuz.ch/index.php/hotel">Gasthof Kreuz ein Zimmer zu buchen</a>.</div>
          <div classname="text">Eine Nacht mit Frühstück kostet 85.- CHF ohne Frühstück 75.- CHF.</div>
          <div classnem="text">Bitte meldet euch bis zum <span className="bold">25. November</span> mit unten stehendem Formular an.</div>
          <div classname="App-title">Es sind Parkplätze vorhanden.</div>
          <Details>
            <Detail header="Datum" info="30.11.2018" />
            <Detail header="Uhrzeit" info="18:00" />
            <Detail header="Ort" info={ <Adress adress="Gasthof Kreuz" street="Hauptstrasse 43" zip="4716" town="Welschenrohr" /> } />
          </Details>
          <SignUp />
        </Page>
      </div>
    );
  }
}

class Adress extends Component {
  render(){
    return (
      <div className="ad-wrapper">
        <div className="ad-line">{this.props.adress}</div>
        <div className="ad-line">{this.props.street}</div>
        <div className="ad-line">{this.props.zip} {this.props.town}</div>
      </div>
    )
  }
}

class Button extends Component {
  render(){
    return(
      <div>
        <button className="button" onClick={this.props.action}>{this.props.name}</button>
      </div>
    )
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
      <div className="SignUp">{this.props.children}</div>
    )
  }
}

class SignUp extends Component {

  constructor(props){
    super(props);
    this.state={
      name: '',
      attend: '',
      partner: ''
    };

    this.signUp = this.signUp.bind(this);
    this.toggleName = this.toggleName.bind(this);
    this.toggleAttend = this.toggleAttend.bind(this);
    this.togglePartner = this.togglePartner.bind(this);
  }

  signUp(){
    alert('name: ' + this.state.name + ', attend: ' + this.state.attend + ', partner: ' + this.state.partner);
  }

  toggleName(name){
    this.setState({name: name});
  }

  toggleAttend(attend){
    this.setState({attend: attend});
  }

  togglePartner(partner){
    this.setState({partner: partner});
  }

  render(){
    return (
      <form className={this.props.classname}>
        <div classname="App-title">Ich, <Input className="input-line" placeholder="Name" toggleItem={this.toggleName} />, <Dropdown2 className="input-select" list={["werde gerne", "kann nicht"]} title="werde gerne" toggleItem={this.toggleAttend}/> teilnehmen.</div>
        <div classname="App-title">Gerne melde ich mich <Dropdown2 className="input-select" list={["mit meinem Partner", "alleine"]} title="alleine" toggleItem={this.togglePartner} /> an.</div>
        <Button name="Anmelden" action={ () => this.signUp() } />
      </form>
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

class Dropdown2 extends Component {
  constructor(props){
    super(props);
    this.state={
      listOpen: false,
      headerTitle: this.props.title
    };

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.select = this.select.bind(this);
  }

  handleClickOutside(){
    this.setState({listOpen: false});
  }

  toggleList(){
    this.setState(prevState => ({listOpen: !prevState.listOpen}))
  }

  select(item){
    this.setState({headerTitle: item});
    this.toggleList();
    this.props.toggleItem(item);
  }

  render(){
    return (
      <div className="dd-wrapper">
        <span className="dd-title" onClick={() => this.toggleList()}>
          {this.state.headerTitle}
          {this.state.listOpen
            ? <FontAwesome name="angle-up" className="dd-icon" />
            : <FontAwesome name="angle-down" className="dd-icon"/>
          }
        </span>
        {this.state.listOpen && <ul className="dd-list">
          {this.props.list.map((item) => (<li className="dd-list-item" key={item} onClick={() => this.select(item)}>{item}</li>))}
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
