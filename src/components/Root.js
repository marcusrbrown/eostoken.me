import React from 'react';
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Sidebar from 'grommet/components/Sidebar';
import Split from 'grommet/components/Split';
import Title from 'grommet/components/Title';

export default () =>
  <App>
    <Split flex='right'>
      <Sidebar size='small'>
        <Header>
          <Title>eostoken.me</Title>
        </Header>
      </Sidebar>
      <Article>
        <Paragraph>
          A set of tools for interacting with the EOS ERC-20 token.
        </Paragraph>
        <Notification
          status='warning'
          message='This website is not affiliated with block.one or the EOS project.'
        />
      </Article>
    </Split>
  </App>;
