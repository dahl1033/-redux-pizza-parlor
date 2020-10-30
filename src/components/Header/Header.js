import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {

  render(){
    return(
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
        <h2>Total: {this.props.reduxState.totalReducer} </h2>
      </header>
    )
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(Header);