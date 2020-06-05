import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ngoview from "./ngo_view";
import logo from './shutterstock_1115346623.jpg';

import './app.global.scss'

class Home extends Component {

  render() {
    return (


<div className="App">

<header className="App-header"food-for-all>
  <img src={logo} className="App-logo" alt="logo" />
  <a
    className="App-link"
    href="https://dataplatform.cloud.ibm.com/dashboards/3db31935-9b54-41fb-83c9-96d040ac6e36/view/191aa50030f575c212b7eee4079079027935705db2bb8b5587d77b490a617097f03f47c4c87a4b58d9140466f7e443089c"
    target="_blank"
    rel="noopener noreferrer"
  >
    Dashboard
  </a>

        <div id="container">
        <div>
            <Link to="/ngoview">NGO View</Link>
          </div>

        </div>


</header>
</div>
    );
  }
}

export default Home;