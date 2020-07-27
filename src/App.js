import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './containers/Home/home';
import Cart from './containers/Cart/Loadable';
import Offer from './containers/Offer/Loadable';


function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route path='/offer' component={Offer}></Route>
          <Route path='/cart' component={Cart}></Route>
        </Switch>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
