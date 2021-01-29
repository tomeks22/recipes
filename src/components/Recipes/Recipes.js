import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Mojito from './Mojito';
import Martini from './Martini';

class Recipes extends Component {
    render () {
        return (
                <Router>
                <div className="rec-list">
                    <ul className="rec-links">
                        <li><Link to="/recipes/mojito">Mojito</Link></li>
                        <li><Link to="/recipes/martini">Martini</Link></li>
                    </ul>
                </div>
                <Switch>
                        <Route exact path="/recipes/mojito">
                            <Mojito/>
                        </Route>
                        <Route path="/recipes/martini">
                            <Martini />
                        </Route>
                    </Switch>
                </Router>
        );
    }
}

export default Recipes;
