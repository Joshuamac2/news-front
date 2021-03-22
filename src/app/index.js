import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../api/index";

import { Provider } from "react-redux";
import store from "../store";

import { NavBar, Landing } from '../components';
import { ArticlesList, ArticlesInsert } from '../pages';
import Register from "../components/auth/Register.js";
import Login from "../components/auth/Login.js";
import PrivateRoute from "../components/private-route/PrivateRoute";
import Dashboard from "../components/dashboard/Dashboard";
import { NewsContextProvider } from "../NewsContext";
import News from "../components/News";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());

    window.location.href = "./login";
  }
}


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <NavBar />
            <Route path="/" exact>
              <NewsContextProvider><News /></NewsContextProvider>
            </Route>
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/articles/list" exact component={ArticlesList} />
            <Route path="/articles/create" exact component={ArticlesInsert} />
            <Route path="/landing" exact component={Landing} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
          </div>
      </Router>
    </Provider>
  )
}

export default App
