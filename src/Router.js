import React from 'react'
import { Switch, Route } from 'react-router-dom'

//imports
import Car from '../src/components/Car'
import Home from '../src/components/Home'
import About from '../src/components/About'

const Router = () =>{
return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About}/>
            <Route path='/car/:id' component={Car}/>
        </Switch>  
);
}

export default Router