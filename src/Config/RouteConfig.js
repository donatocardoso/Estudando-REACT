import React from 'react';
import { Switch, Route } from 'react-router-dom';
import $ from 'jquery';
import ReactPage from './JSX/ReactPage';

const RouteConfig = {
  RefreshPage: (src) => (function () {
    $('#renderPage').prop('src', src);
  }),

  ResizePage: () => (function () {
    $('#renderPage').css('height', $('#renderPage').offsetParent()[0].offsetHeight + 'px');
  }),

  Routes: () => (function () {
    <Switch>
      <Route path='/react' component={ReactPage} />
    </Switch>
  })
}

export default RouteConfig;
