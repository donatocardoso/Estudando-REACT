import $ 		from 'jquery';
import React 	from 'react';
import ReactDOM from 'react-dom';

import Error404 from '../JSX/Error404';

const RenderConfig = {

	React: function (component, idElement) {
		$('#conteudoWebForms').hide();
		
		$('#conteudoReact').show();
		ReactDOM.render(component, $(idElement)[0]);
	},

	WebForms: function (src) {
		$('#conteudoReact').hide();

		$('#conteudoWebForms').prop('src', 'http://localhost:5001' + src).show()
	},

	Error404: function () {
		RenderConfig.React(<Error404 />, '#conteudoReact');
	},

}

export default RenderConfig;
