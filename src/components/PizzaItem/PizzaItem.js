import React,{ Component } from 'react';
import './PizzaItem.css';

class PizzaItem extends Component {
    render(){
        return(
            <div>
                  <div className="pizzaDiv">
                    <img src={this.props.pizza.image_path} alt={this.props.description} className="pizzaPic"/>
                    <h2>{this.props.pizza.name}</h2>
                    <p>{this.props.pizza.description}</p>
                    <p>{this.props.pizza.price}</p>
                  </div>
            </div>

        )
    }
}

export default PizzaItem;