import { Children, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import to from 'await-to-js';
import { web3 as web3Loader } from '../clients';
import { client as clientActions } from '../actions';

class ClientConnector extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static childContextTypes = {
    web3: PropTypes.object
  }

  constructor(...args) {
    super(...args);
    this.web3 = null;
  }

  getChildContext() {
    return { web3: this.web3 };
  }

  async componentDidMount() {
    let err, web3;

    [err, web3] = await to(web3Loader);

    if (err) {
      return;
    }

    this.web3 = web3;
    this.props.dispatch(clientActions.web3.initialize(web3));
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default connect()(ClientConnector);
