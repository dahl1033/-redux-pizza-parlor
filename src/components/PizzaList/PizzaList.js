import React,{ Component } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import {connect} from 'react-redux';


class PizzaList extends Component {
  
  sendPizzaToCart = (event) => {
    console.log('going to cart', this.props.history);
    this.props.history.push('/cart');
  }
  
    render(){
        
        return(
          <>
            <h1>Choose Your Pizza</h1>
            {this.props.reduxState.pizzaReducer.map((pizza, index) => {
                return (
                  <PizzaItem pizza={pizza} key={index} orderTotal={this.props.orderTotal}/>
                )
              })
            }
            <footer>
              <button
                onClick={this.sendPizzaToCart}
                className="cartBtn"
                >
                  Go To Cart</button>
            </footer>
          </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(PizzaList);