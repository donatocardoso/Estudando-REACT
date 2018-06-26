import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class RouteConfig {

  constructor() {
    const routes = [
      {
        path: "/react",
        component: function(){ this.renderPage('localhost:3000'); }
      },
      {
        path: "/webforms",
        component: function(){ this.renderPage('localhost:5001'); }
      }
    ];
  }

  renderPage(src) {
    document.getElementById('renderPage').Link = src;
  }

}

export default RouteConfig;
