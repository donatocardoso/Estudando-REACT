import './1 - Web/Content/index.css';
import React, { Component } from 'react';

import ImgLogo      from './1 - Web/Content/Images/logo.png';
import RenderConfig from './1 - Web/Config/RenderConfig';
import ReactPage    from './1 - Web/JSX/ReactPage';

class Index extends Component {

    render() {
        return (
            <div id='container'>
                <header id='cabecalho'>
                    <img src={ImgLogo} alt='Logo' />

                    <button onClick={() => RenderConfig.React(<ReactPage />, '#conteudo')}>React</button>
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

RenderConfig.React(<Index />, '#root');
RenderConfig.React(<ReactPage />, '#conteudo');

export default Index;
