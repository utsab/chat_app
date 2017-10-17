import React, { Component } from 'react';
import './App.css';


class AllMessages extends Component {
  constructor() {
    super(); 
    this.state = {
      messages: [
        {
          name: "Utsab", 
          content: "Hurrah!!!"
        }, 
        {
          name: "Matt", 
          content: "Woot!!!"
        }
      ]
    }
  }
  
  render() {
    let messageComponents = this.state.messages.map((message, i) => {
      return (
        <li key={i}>
          <strong>{message.name}</strong>: 
          {message.content}
        </li>
      );
    });
    
    return (
      <div>
        I'm the AllMessages Component!
        <ul>
          {messageComponents}
        </ul>
      </div>
    ); 
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to Chat App</h1>
        </header>
        <AllMessages/>
      </div>
    );
  }
}

export default App;
