import React, { Component } from 'react';
import Screening from '../components/ScreeningList'


class ScreeningList extends Component {

  render(){

    // Create an array of comment components from the data collection
    const screeningNodes = this.props.data.map((screening, index) => {
      return (
        <Screening
        title={screening.title}
        key={index}>
        {screening.text}</Screening>
      )
    })

    return <div> {screeningNodes}</div>
  }
}



export default ScreeningList;
