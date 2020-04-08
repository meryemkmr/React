import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import BaseLayout from './components/layout/BaseLayout'
import Blogs from './components/Blogs';
import NoMatch from './components/NoMatch';
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
  <Switch>
  <Route exact path ="/" component ={App}/>
  <Route path ="/aboutus" component ={AboutUs}/>
  <Route path ="/contactus" component ={ContactUs}/>
  <Route exact path="/blogs" component={Blogs} />
  <Route path="/blogs/:blogID" component={Blogs} />
  <Route  component={NoMatch} />

  </Switch>
  </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root')
);

