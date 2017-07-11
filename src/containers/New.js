import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';
import {
  Header,
  Main,
} from '../components/home-view';
class New extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      tilte:'新页面'
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }


  render() {
    const color = "purple";
    return (
      <div>
        {this.state.tilte}
        <Header color={color} {...this.props}/>
        <Main {...this.props}/>
      </div>
    );
  }
}

New.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New);
