import React, { Component } from 'react';
import GrommetApp from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';

class App extends Component {
  render() {
    return (
      <GrommetApp>
        <Article>
          <Header>
            <Title>eostoken.me</Title>
          </Header>
          <Paragraph>
            A set of tools for interacting with the EOS ERC-20 token.
          </Paragraph>
          <Notification
            status='warning'
            message='This website is not affiliated with block.one or the EOS project.'
          />
        </Article>
      </GrommetApp>
    );
  }
}

export default App;
