import React, { Component } from 'react';
import './css/main.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Recipes from "./components/Recipes/Recipes";


class App extends Component {
  render() {
    

    return (
      
        <Router>
                <div>
                        <nav>
                            <ul className="nav-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/recipes/mojito">Recipes</Link></li>
                            </ul>
                        </nav>
                    <Switch>
                        <Route exact path="/">
                            <Layout />
                        </Route>
                        <Route path="/recipes/mojito">
                            <Recipes />
                        </Route>
                    </Switch>
                </div>
          </Router>
      
    )
    
  }
}

export default App;
