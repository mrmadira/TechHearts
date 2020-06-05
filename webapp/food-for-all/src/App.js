import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Ngoview from "./ngo_view";
import AdminView from "./admin_view";
import logo from './shutterstock_1115346623.jpg';
import {graph_url} from './common_vars'


const dashboard_url=graph_url

class App extends Component {
  constructor(props) {
  super(props);

    this.state = {
      ngoview:false,
      adminView:false,
      home:true
    };
  }

  setNgoView = () => {
    this.setState({ngoview:true,home:false,adminView:false})
  }

  setAdminView = () => {
    this.setState({adminView:true,home:false,ngoview:false})
  }

  setHomeView = () => {
    this.setState({adminView:false,home:true,ngoview:false})
  }
  render() {
    return (
      <div>
     { this.state.home === true?
      <div className="App"  >

        <div className="App-link" style={{paddingTop:'3rem',fontSize:'5rem',backgroundColor:'#f3d5df'}}>Food-for-all </div>
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: 'flex', justifyContent: 'center',backgroundColor:'#f3d5df',paddingTop:'1rem' }}>
        <div>
          <a
            className="App-link"
            href={dashboard_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Dashboard
        </a>
        </div >
        
        <div style={{paddingLeft:'2rem'}}><a className="App-link" style={{cursor:'pointer',textDecoration:'underline'}} onClick={this.setNgoView} onClick={this.setAdminView} >Admin View</a></div>
        <div style={{paddingLeft:'2rem'}}><a className="App-link" style={{cursor:'pointer',textDecoration:'underline'}} onClick={this.setNgoView} >NGO View</a></div>
        

      </div>
      </div>
      :null}
      { this.state.ngoview === true?
      <div><Ngoview setHomeView={this.setHomeView} /></div>:null}
      { this.state.adminView === true?
      <div><AdminView setHomeView={this.setHomeView} /></div>:null}

      {/*window.location.href.includes('/ngoview')?
      <div><Ngoview /></div>
      :
      window.location.href.includes('/adminView')?
      <div><AdminView /></div>
      :null
      */}
      </div>
    );
  }
}

export default App;