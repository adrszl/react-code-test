import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Loader from './components/Loader';
import Users from './components/Users';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    setTimeout(() => { 
      this.setState({ loading: false });
    }, 3000);
    return (
      <>
        <Loader loading={ this.state.loading } />
        <Header loading={ this.state.loading } />
        <Users loading={ this.state.loading } />
      </>
    );
  }
}

export default App;
