import '../Content/Css/StartPage.css';
import React, { Component } from 'react';

import MenuBrinde       from '../Content/Images/menuBrinde.png';
import MenuParticipante from '../Content/Images/menuParticipante.png';
import MenuPartida      from '../Content/Images/menuPartida.png';
import RenderConfig     from '../Config/RenderConfig';
import ReactPage        from '../JSX/ReactPage';

class StartPage extends Component {

	render() {
		return (
			<div id='divStartPage'>
				<div id='divCadBrinde'>
                    <img src={MenuBrinde} alt='Menu Brinde' />
                    <span class='legend' onClick={() => RenderConfig.WebForms('/Views/Brinde.aspx')} >
                        Cadastrar Brindes
                    </span>
                </div>

                <div id='divCadParticipante' disabled>
                    <img src={MenuParticipante} alt='Menu Participante' />
                    <span class='legend' onClick={() => RenderConfig.React(<ReactPage />, '#conteudoReact')} >
                        Cadastrar Participantes
                    </span>
                </div>

                <div id='divCadPartida'>
                    <img src={MenuPartida} alt='Menu Partida' />
                    <span class='legend'>
                        Iniciar Partida
                    </span>
                </div>
			</div>
		);
	}

}

export default StartPage;
