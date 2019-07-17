import React from 'react';
import Anchor from 'grommet/components/Anchor';
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Sidebar from 'grommet/components/Sidebar';
import Split from 'grommet/components/Split';
import Title from 'grommet/components/Title';
import Router from './Router';
import sitemap from '../sitemap';

const createMenuAnchors = sitemap =>
  sitemap.reduce((anchors, content) => {
    if (content.label) {
      anchors.push(
        <Anchor
          key={content.path || ''}
          path={`/${content.path || ''}`}
        >
          {content.label}
        </Anchor>
      );
    }

    return anchors;
  }, []);

export default () => (
  <Router>
    <App>
      <Split flex='right'>
        <Sidebar size='small'>
          <Header>
            <Title>eostoken.me</Title>
          </Header>
          <Menu>
            {createMenuAnchors(sitemap)}
          </Menu>
        </Sidebar>
        <Article>
          <Paragraph>
            A set of tools for interacting with the EOS ERC-20 token.
          </Paragraph>
          <Notification
            status='warning'
            message='This website is not affiliated with block.one or the EOS project.'
          />
          <Router.Routes sitemap={sitemap} />
        </Article>
      </Split>
    </App>
  </Router>
);
