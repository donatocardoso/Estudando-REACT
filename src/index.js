import React from 'react';
import ReactDOM from 'react-dom';
import App from './JSX/App';
import Route from '../public/Config/Route';
import './Content/index.css';

ReactDOM.render(<App />, document.getElementById('root'));

export default Click = (route) => {
    for (const r of Route) {
        if(r.path == route)
            r.component();
    }
};

//App.testeJQUERY();
