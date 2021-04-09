import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';

class Summary extends Component {
  createMarkup = () => {
    return { __html: this.props.summary };
  };
  render() {
    return (
      <Aux>
        <h3 className="mt-5 px-4">Summary</h3>
        <div
          className="mt-5 px-4"
          dangerouslySetInnerHTML={this.createMarkup()}
        ></div>
      </Aux>
    );
  }
}
export default Summary;
