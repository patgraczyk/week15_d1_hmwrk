import React, { Component} from 'react';

class Screening extends Component {

  render(){
    return (
      <div>
      <h4> {this.props.children} </h4>
      <p> {this.props.title} </p>
      </div>
    )
  }
}

export default Screening;
