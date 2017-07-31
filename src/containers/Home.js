import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';
import "../static/css/home.scss";
import {
  Header,
  Main,
} from '../components/home-view';
class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      tilte:'首页1'
    };
  }

  componentDidMount() {
    window.setTimeout(()=>{
      console.log('aaaa');
      this.setState({
        tilte:'ccc',
        body:'333'
      });
    },4000);

  }

  componentWillUnmount() {

  }




  handle=(e)=>{
    console.log(e.currentTarget);
  }

  render() {
    const color = "purple";
    return (
      <div>
        <div onClick={this.handle} className="header">asdfasfasf</div>

        <Header  color={color} {...this.props}/>
        <Main {...this.props}/>
      </div>
    );
  }
}

Home.propTypes = {
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
)(Home);
