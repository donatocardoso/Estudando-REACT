import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Error404 from '../JSX/Error404';

const RenderConfig = {

	React: function (component, idElement) {
		$('#conteudoWebForms').hide();
		
		$('#conteudoReact').show();
		ReactDOM.render(component, $(idElement)[0]);
	},

	WebForms: function (src) {
		$('#conteudoReact').hide();

		$('#conteudoWebForms').prop('src', 'http://localhost:500' + src).show();
	},

	Error404: function () {
		console.log($('#conteudoWebForms'));
		//RenderConfig.React(<Error404 />, '#conteudoReact');
	},

}

export default RenderConfig;
