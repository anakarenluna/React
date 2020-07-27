import React, { Component } from 'react';

import { Detalle } from './Detalle/detalle' //detalle react router
import { Home } from './Detalle/home' //renderizado principal
import { NotFound } from './Detalle/Error'
import { Switch, Route } from 'react-router-dom'//componentes de React router
//import {Row} from 'react-bootstrap'
import './App.css';
import 'bulma/css/bulma.css' //plantillas de css
import Menu from './Menu/menu'
import MenuRegistro from './menuRegistro/index'

//id->parametro de la url
class App extends Component {
  render(){
   return (
    <div className="App">
        <Menu />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/detalle/:movieId' component={Detalle}/>
          <MenuRegistro/>
          <Route component={NotFound} />
        </Switch> 
    </div>
    );
  }
}

export default App;
