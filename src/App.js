import React, { Component } from 'react';
import './App.css';
import Repo from './Repo';
import UserList from './UserList';

let changeIsActive = (is)=>{this.setState({ isActive: is });};
class App extends Component {
  state={
    isActive: true
  }
 
  render() {
    return (
      <div className="App">
     { 
      this.state.isActive===false&&
        <Repo active={changeIsActive}/>
      }
      
      {this.state.isActive===true&&
        <UserList active={changeIsActive}/>
      }
    } 
      </div>
    );
  }
}

export default App;
