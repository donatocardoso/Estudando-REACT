import '../Content/Css/StartPage.css';
import React, { Component } from 'react';
import $ from 'jquery';

import RenderConfig     from '../Config/RenderConfig';
import MenuBrinde       from '../Content/Images/menuBrinde.png';
import MenuParticipante from '../Content/Images/menuParticipante.png';
import MenuPartida      from '../Content/Images/menuPartida.png';
import ReactPage        from '../JSX/ReactPage';

class StartPage extends Component {

	render() {
		return (
			<div id='divStartPage'>
				<button id='btnCadBrinde' onClick={() => RenderConfig.WebForms('/Views/Brinde.aspx')}>
                    <img src={MenuBrinde} alt='Menu Brinde' />
                    <span class='legend' onClick={() => $('#btnCadBrinde').trigger('click')} >
                        Cadastrar Brindes
                    </span>
                </button>

                <button id='btnCadParticipante' onClick={() => RenderConfig.React(<ReactPage />, '#conteudoReact')} disabled='disabled' >
                    <img src={MenuParticipante} alt='Menu Participante' />
                    <span class='legend' onClick={() => $('#btnCadParticipante').trigger('click')} >
                        Cadastrar Participantes
                    </span>
                </button>

                <button id='btnCadPartida' onClick={() => RenderConfig.React(<ReactPage />, '#conteudoReact')} disabled='disabled' >
                    <img src={MenuPartida} alt='Menu Partida' />
                    <span class='legend' onClick={() => $('#btnCadPartida').trigger('click')} >
                        Iniciar Partida
                    </span>
                </button>
			</div>
		);
    }

    EnableBtnParticipante() {

    }

    EnableBtnPartida() {
        
    }

}

export default StartPage;
