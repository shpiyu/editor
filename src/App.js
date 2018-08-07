import React, { Component } from 'react';
import './App.css';
import Editor from './editor/editor';
import Posts from './posts/posts';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="app">

          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/editor/:id" component={Editor} />
            <Route path="/editor" component={Editor} />

            <Route component={Posts} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
