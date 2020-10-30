import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'; 
import PizzaList from '../PizzaList/PizzaList';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';


class App extends Component {

  componentDidMount() {
    this.refreshPizzaList();
    this.orderTotal();
  }

  orderTotal = () => {
    let orderTotal = 0;
    {this.props.reduxState.cartReducer.map((pizza, index) => {
       orderTotal += Number(pizza.price);
        return orderTotal;
    })}
    console.log("order total is", orderTotal)
    this.props.dispatch({
        type: 'ORDER_TOTAL',
        payload: orderTotal,
    })
    
}

  // get pizzas from DB and send to Redux state
  refreshPizzaList = () => {
    axios.get('/api/pizza').then((response) => {
      console.log('in refreshPizzaList, response: ', response.data);
      this.props.dispatch({
        type: 'ADD_PIZZA_TO_STORE',
        payload: response.data
      })
    })
  }


  render() {
    return (
      <>
      <Router>
        <div className="App">
          <Header/>
          {/* <img src="images/pizza_photo.png"/> */}
          <Route exact path="/" component={PizzaList}/>
          <Route path="/cart" component={Cart} />
        </div>
      </Router>


      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(App);
