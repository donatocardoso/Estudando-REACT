import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImgMenu from './Content/Images/menu.png';
import ImgRodape from './Content/Images/rodape.png';
import './Content/index.css';
import RouteConfig from './Config/RouteConfig';

export default class Index extends Component {

    render() {
        return (
            <div id='container'>
                <header id='cabecalho'>
                    <img src={ImgMenu} alt='Menu' />
                </header>

                <section id='conteudo'>
                    <button onClick={RouteConfig.RefreshPage('/react')}>React</button>
                    <button onClick={RouteConfig.RefreshPage(window.location.href)}>WebForms</button>

                    <iframe id='renderPage' title='iframe' onLoad={RouteConfig.ResizePage()} scrolling='no'></iframe>
                </section>

                <footer id='rodape'>
                    <img src={ImgRodape} alt='Rodapé' />
                </footer>
            </div>
        );
    }

}

ReactDOM.render(<Index />, document.getElementById('root'));
