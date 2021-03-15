import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar, Landing } from '../components';
import { ArticlesList, ArticlesInsert } from '../pages';
import Register from "../components/auth/Register.js";
import Login from "../components/auth/Login.js";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/articles/list" exact component={ArticlesList} />
      <Route path="/articles/create" exact component={ArticlesInsert} />
      </Switch>
    </Router>
  )
}

export default App
