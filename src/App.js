// Deps
import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

// Config
import environment from './environment';

// Components
import DefaultTemplate from 'components/layouts/default';

// Pages
import Page1 from 'components/pages/page1';
import Page2 from 'components/pages/page2';

export default () => (
  <Router basename={environment.basename}>
    <DefaultTemplate>
      <Switch>
        <Redirect exact from="/" to="/page1" />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>
    </DefaultTemplate>
  </Router>
);
