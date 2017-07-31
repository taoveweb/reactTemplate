import React from 'react';
import PropTypes from 'prop-types';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
 onChange=(date, dateString)=> {
  console.log(date, dateString);
}

  render() {
    return (
      <div>
        首页主要内容
        <br />
        <br />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
