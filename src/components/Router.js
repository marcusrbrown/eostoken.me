import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

const Router = ({ children }) => (
  <BrowserRouter>
    {React.Children.only(children)}
  </BrowserRouter>
);

Router.Routes = ({ sitemap }) => (
  <Switch>
    {createRoutes(sitemap)}
  </Switch>
);

export default Router;
