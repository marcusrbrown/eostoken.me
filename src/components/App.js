import React, { Component } from 'react';
import GrommetApp from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

class App extends Component {
  render() {
    return (
      <GrommetApp>
        <Header>
          <Title>eostoken.me</Title>
        </Header>
        <Article>
          eostoken.me is an appplication for interacting with the EOS ERC-20 token.
        </Article>
      </GrommetApp>
    );
  }
}

export default App;
