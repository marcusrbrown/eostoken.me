import { Children, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Web3Client } from '../clients';
import { clients as clientActions } from '../actions';
import { clients as clientSelectors } from '../selectors';
import constants from '../constants';

const debug = require('../utils').debug('clientconnector');

class ClientConnector extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static childContextTypes = {
    web3Client: PropTypes.instanceOf(Web3Client)
  }

  constructor(...args) {
    super(...args);
    this.web3Client = new Web3Client();
    this.unsubscribers = [];
  }

  getChildContext() {
    return { web3Client: this.web3Client };
  }

  componentDidMount() {
    this.unsubscribers.push(this.web3Client.subscribe('*', (type, payload) => {
      switch (type) {
        case 'error':
          this.props.dispatch(clientActions.web3.setError(payload));
          break;

        case 'connect':
          this.props.dispatch(clientActions.web3.initialize(payload));
          break;

        case 'ready':
          // Ignored.
          break;

        default:
          debug(`Unhandled Web3Client event '${type}'`, payload);
          break;
      }
    }));

    this.web3Client.connect();
  }

  componentWillUnmount() {
    for (let unsubscribe of this.unsubscribers) {
      unsubscribe();
    }
    this.unsubscribers = [];
  }

  componentWillReceiveProps({ web3Status }) {
    if ((this.props.web3Status !== web3Status) && (web3Status === constants.web3.status.READY)) {
      this.web3Client.emit('ready', this.web3Client.web3);
    }
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default connect(
  createStructuredSelector({
    web3Status: clientSelectors.web3.selectStatus
  })
)(ClientConnector);
