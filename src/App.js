import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
      return(
          <div>
              <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                      <div className="navbar-header">
                          <Link className="navbar-brand" to="/">Monitor</Link>
                      </div>
                      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav">
                              <li><Link activeClassName="active" to="/">Home</Link></li>
                              <li><Link activeClassName="active" to="/checks">Checks</Link></li>
                          </ul>
                      </div>
                  </div>
              </nav>
              <div className="container">
                  {this.props.children}
              </div>
          </div>
      );
  }
}

export default App;
