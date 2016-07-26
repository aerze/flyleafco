import React from 'react';
import Navbar from '../Components/Navbar';

const Views = React.createClass({

  render() {
    return (
      <div>
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
});

export default Views;
