import {Component, useState, React} from 'react';
import Radium, {StyleRoot} from 'radium';
import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav/Nav';
import News from './Component/News/News';
import MenuButton from './Component/Nav/MenuButton';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render(){
    return (
      <StyleRoot>
      <div className="App">          
        <header className="App-header">
          <div className="App-header-company">
            <img className="App-logo" src={logo}  alt="logo" />
            <div className="App-header-title" style={{ marginTop:'auto', padding: '10px', }}>My App News</div>
          </div>          
          <div className="App-header-btnMenu" onClick={() => this.setState({ open: !this.state.open })}>
            <MenuButton open={this.state.open} /> 
          </div>
        </header>
        <div className="content">         
          <Nav open={this.state.open} />      
          <News />                  
        </div>      
      </div>
      </StyleRoot>
    );
  }

}

export default Radium(App);
