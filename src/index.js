import React, { Component } from 'react';
import ImgLogo from './Content/Images/logo.png';
import './Content/index.css';
import RenderConfig from './Config/RenderConfig';
import ReactPage from './JSX/ReactPage';

export default class Index extends Component {

    render() {
        return (
            <div id='container'>
                <header id='cabecalho'>
                    <img src={ImgLogo} alt='Logo' />

                    <button onClick={() => RenderConfig.React(<ReactPage />, 'conteudo')}>React</button>
                    <button onClick={() => RenderConfig.WebForms('/Views/Brinde.aspx')}>WebForms</button>
                </header>

                <section id='conteudo'></section>

                <iframe id='renderPage' title='iframe' scrolling='yes'></iframe>

                <footer id='rodape'>
                    Rodapé
                </footer>
            </div>
        );
    }

}

RenderConfig.React(<Index />, 'root');
RenderConfig.React(<ReactPage />, 'conteudo');
