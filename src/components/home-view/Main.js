import React from 'react';
import PropTypes from 'prop-types';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        首页主要内容
        <img src={require("./img/mopingbg.png")} alt=""/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
