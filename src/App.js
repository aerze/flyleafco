import React from 'react';
import './App.css';

const App = React.createClass({

  getInitialState() {
    return {
      loaded: true
    };
  },

  componentDidMount() {
  },

  renderPage() {
    if (this.state.loaded) {
      return this.props.children
    }

    return (<h2> loading.. </h2>);
  },

  render() {
    return (
      <div className="App">
        {this.renderPage()}
      </div>
    );
  }
});

export default App;
