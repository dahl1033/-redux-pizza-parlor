import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {

    deletePizza = (event) => {
        this.props.dispatch({
            type: 'DELETE_PIZZA_ORDER',
            payload: event.target.dataset.id
        })
    }

    handleSubmit = () => {
        console.log('Next Btn Clicked');
        this.props.history.push('/');
    }


    render(){
        return (
            <>
            {this.props.reduxState.cartReducer.map((cart, index) =>{
                console.log('in cart map index: ', index);
                return (
                    <div key = {index}>
                        <p>{cart.name}</p>
                        <p>{cart.price}</p>
                        <button data-id={index} onClick={this.deletePizza}>Delete</button>
                    </div>
                )
            })}
            <footer>
                <button onClick={this.handleSubmit}>
                    Submit Order
                </button>
            </footer>
            </>
        )}
}
            
  
const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(Cart);