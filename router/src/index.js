import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import BaseLayout from './components/layout/BaseLayout'
<<<<<<< HEAD
import Blogs from './components/Blogs';
import NoMatch from './components/NoMatch';
=======
>>>>>>> bcd927ff5636d6111c3d73b4402a1ef98373232a
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
  <Switch>
  <Route exact path ="/" component ={App}/>
  <Route path ="/aboutus" component ={AboutUs}/>
  <Route path ="/contactus" component ={ContactUs}/>
<<<<<<< HEAD
  <Route exact path="/blogs" component={Blogs} />
  <Route path="/blogs/:blogID" component={Blogs} />
  <Route  component={NoMatch} />
=======
>>>>>>> bcd927ff5636d6111c3d73b4402a1ef98373232a

  </Switch>
  </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root')
);

