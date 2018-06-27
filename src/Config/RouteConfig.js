import $ from 'jquery';
import ReactPage from './JSX/ReactPage';

const RouteConfig = {
  RefreshPage: (src) => (function () {
    $('#renderPage').prop('src', src);
  }),

  ResizePage: () => (function () {
    $('#renderPage').css('height', $('#renderPage').offsetParent()[0].offsetHeight + 'px');
  }),

  Routes: [
    { Url: '/react', Component: ReactPage }
  ]
}

export default RouteConfig;
