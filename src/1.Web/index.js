import './1-Web/Content/Css/index.css';
import React, { Component } from 'react';

import ImgLogo      from './1-Web/Content/Images/logo.png';
import RenderConfig from './1-Web/Config/RenderConfig';
import ReactPage    from './1-Web/JSX/ReactPage';
import StartPage    from './1-Web/JSX/StartPage';

class Index extends Component {

    render() {
        return (
            <div id='container'>
                <header id='cabecalho'>
                    <img src={ImgLogo} alt='Logo' />

                    <button onClick={() => RenderConfig.React(<ReactPage />, '#conteudoReact')}>React</button>
                    <button onClick={() => RenderConfig.WebForms('/Views/Brinde.aspx')}>WebForms</button>
                </header>

                <section id='conteudoReact'></section>

                <iframe id='conteudoWebForms' title='iframe' /*onLoad={() => RenderConfig.WebForms()}*/ scrolling='yes'></iframe>

                <footer id='rodape'>
                    Rodapé
                </footer>
            </div>
        );
    }

}

RenderConfig.React(<Index />, '#root');
RenderConfig.React(<StartPage />, '#conteudoReact');

export default Index;
