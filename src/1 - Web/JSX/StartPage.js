import '../Content/Css/StartPage.css';
import React, { Component } from 'react';
import $ from 'jquery';

import MenuBrinde       from '../Content/Images/menuBrinde.png';
import MenuParticipante from '../Content/Images/menuParticipante.png';
import MenuPartida      from '../Content/Images/menuPartida.png';
import RenderConfig     from '../Config/RenderConfig';
import ReactPage        from '../JSX/ReactPage';

class StartPage extends Component {

	render() {
		return (
			<div id='divStartPage'>
				<button id='btnCadBrinde'>
                    <img src={MenuBrinde} alt='Menu Brinde' />
                    <span class='legend' onClick={() => RenderConfig.WebForms('/Views/Brinde.aspx')} >
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


}

export default StartPage;
