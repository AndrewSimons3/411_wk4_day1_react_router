/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
// Write component imports here //



// Start Router function here //
function Router() {
    return (
        <div className="Router">
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/car/:id" component={Car} />
        </Switch>
        </div>
    );
}

export default Router
