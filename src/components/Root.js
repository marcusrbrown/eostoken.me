import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Sidebar from 'grommet/components/Sidebar';
import Split from 'grommet/components/Split';
import Title from 'grommet/components/Title';
import sitemap from '../sitemap';

const createRoutes = (contents, path) => (
  contents.reduce((routes, content) => {
    routes.push(
      <Route
        path={(path || '') + '/' + (content.path || '')}
        component={content.component}
        key={routes.length}
      />
    );
    return routes;
  }, [])
);

const Routes = ({ sitemap }) => (
  <Switch>
    {createRoutes(sitemap)}
  </Switch>
);

export default () => (
  <BrowserRouter>
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
          <Routes sitemap={sitemap} />
        </Article>
      </Split>
    </App>
  </BrowserRouter>
);
