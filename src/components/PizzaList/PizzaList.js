import React,{ Component } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import {connect} from 'react-redux';


class PizzaList extends Component {
    render(){
        
        return(
          <>
            <h1>Choose Your Pizza</h1>
            {this.props.reduxState.pizzaReducer.map((pizza, index) => {
                return (
                  <PizzaItem pizza={pizza} />
            )})}
          </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(PizzaList);