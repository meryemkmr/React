import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path ="/" component={App} />
      <Route exact path ="/form" component={Form} />
      

      
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
