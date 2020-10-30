import React,{ Component } from 'react';
import './PizzaItem.css';
import {connect} from 'react-redux';

class PizzaItem extends Component {
    
    addToCart = () => {
        console.log('This is the addToCart');
        //dispatch here
        this.props.dispatch({
            type: 'ADD_PIZZA_TO_CART',
            payload: this.props.pizza,
        })
    }
    
    render(){
        return(
            <div>
                  <div className="pizzaDiv">
                    <img src={this.props.pizza.image_path} alt={this.props.description} className="pizzaPic"/>
                    <h2>{this.props.pizza.name}</h2>
                    <p>{this.props.pizza.description}</p>
                    <p>{this.props.pizza.price}</p>
                    <button onClick={this.addToCart}>Add</button>
                  </div>
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(PizzaItem);