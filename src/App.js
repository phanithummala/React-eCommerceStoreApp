import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Cart,Details,ProductLists,Navbar,PageNotFound} from './components';
import {Switch,Route} from 'react-router-dom';
import  Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>

      <Navbar/>
      
      <Switch>
          <Route path="/" exact component={ProductLists} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route p component={PageNotFound} />
      </Switch>

      <Modal/>
      
    </React.Fragment>
  );
}

export default App;
