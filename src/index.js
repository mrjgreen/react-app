import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import Home from './Home';
import Checks from './Checks';
import Check from './Check';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Home}/>
            <Route path="/checks" component={Checks}/>
            <Route path="/check/:id" component={Check}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
