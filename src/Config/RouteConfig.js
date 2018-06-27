import { Component } from 'react';
import $ from 'jquery';

class RouteConfig extends Component {

  constructor() {
    super();

    const RefreshIFrame = () => (function () {
      console.log('preparando !!!');
      $('#renderPage').prop('src', window.location.href);
    });

    const ResizeIFrame = () => (function () {
      console.log('carregou !!!');
    });
  }
  
  /*.contentDocument.body).ready(function(elem) {
  //console.log('carregou');
  //$('#renderPage').style.height = $('#renderPage').contentDocument.body.offsetHeight + 'px';

  //$('iframe').style.height = $('iframe').contentDocument.body.offsetHeight+'px';*/
}

export default RouteConfig;
