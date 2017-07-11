import React from 'react';
import PropTypes from 'prop-types';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  constructor(props,context){
    super(props,context);
  }
  render() {
    console.log(this.context);

    return (
      <div>
       首页头部
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
