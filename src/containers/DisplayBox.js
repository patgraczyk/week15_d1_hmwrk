import React, { Component } from 'react';
import ScreeningList from '../components/ScreeningList'


class DisplayBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {title: "Famous Film", text: "Film is great"},
        {title: "Less Famous Film", text: "Film was awful"}
      ]
    }
  }

  render(){
    return (
      <ScreeningList data={this.state.data}/>
    )
  }
}

export default DisplayBox;
