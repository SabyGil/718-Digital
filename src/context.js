import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'OPEN_MODAL':
    return {
      ...state,
      modalIsOpen: true
    };
    case 'CLOSE_MODAL':
    return {
      ...state,
      modalIsOpen: false  
    }
  };
}

export class Provider extends Component {
  state = {
    modalIsOpen: false,

    dispatch: action => this.setState(state => reducer(state, action))
  }


  render(){
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
