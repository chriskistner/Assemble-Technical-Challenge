import React, { Component } from 'react';
import './App.css';
import OrderComplete from './components/reviewCart/orderComplete';
import ShippingInfo from './components/billingShippingInfo/shippingInfo';
import FinishedOrder from './components/finishOrder/orderFinished';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <div className = "container">
              <Switch>
                <Route path="/" exact component={OrderComplete} />
                <Route path="/checkout" component={ShippingInfo} />
                <Route path="/finished" component={FinishedOrder} />
              </Switch>

            </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
