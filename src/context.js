import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (action, state) => {
  switch(action.type){

  }
}

export class Provider extends Component {
  state = {

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
