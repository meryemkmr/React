import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import AddProduct from './components/AddProduct';
import BaseLayout from './components/layout/BaseLayout';
import reducer from './reducers/cartReducer';


//redux

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//react
ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Cart} />
          <Route exact path="/addProduct" component={AddProduct} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);