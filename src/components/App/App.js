import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'; 
import PizzaList from '../PizzaList/PizzaList';
import Footer from '../Footer/Footer';


class App extends Component {

  componentDidMount() {
    this.refreshPizzaList();
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
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        {/* <img src="images/pizza_photo.png"/> */}
        <Route exact path="/" component={PizzaList}/>
        <p>Pizza is great.</p>

      <Footer/>

      </div>


      </Router>


      </>
    );
  }
}

export default connect()(App);
