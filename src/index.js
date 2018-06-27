import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImgMenu from './Content/Images/menu.png';
import ImgRodape from './Content/Images/rodape.png';

/*
import App from './JSX/App';
*/
import RouteConfig from './Config/RouteConfig';

import './Content/index.css';

console.log(RouteConfig);

class Index extends Component {

    render() {
        return (
            <div id='container'>
                <header id='cabecalho'>
                    <img src={ImgMenu} alt='Menu' />
                </header>

                <section id='conteudo'>
                    <button onClick={RouteConfig.RefreshIFrame().bind(this)}>React</button>
                    <button onClick={RouteConfig.RefreshIFrame().bind(this)}>WebForms</button>

                    <iframe id='renderPage' title='iframe' ></iframe>
                </section>

                <footer id='rodape'>
                    <img src={ImgRodape} alt='Rodapé' />
                </footer>
            </div>
        );
    }

}

ReactDOM.render(<Index />, document.getElementById('root'));
