import React, { Component } from "react";
import { Provider } from "react-redux";
import firebase from "firebase";

import { configStore } from "../storeConfig";
import LoginForm from "./components/LoginForm";
import Router from "./Router";

class App extends Component {
  componentDidMount() {
    var config = {
      apiKey: "AIzaSyD1vRx0p8-vJS7Vuh12G9KzKzD5jE8y91U",
      authDomain: "manager-2c50c.firebaseapp.com",
      databaseURL: "https://manager-2c50c.firebaseio.com",
      projectId: "manager-2c50c",
      storageBucket: "manager-2c50c.appspot.com",
      messagingSenderId: "342674760524"
    };

    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={configStore()}>
        <Router />
      </Provider>
    );
  }
}

export default App;
