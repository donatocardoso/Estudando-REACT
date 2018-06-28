import ReactDOM from 'react-dom';
import $ from 'jquery';

const RenderConfig = {

	React: function (component, idElement) {
		$('#conteudoWebForms').hide();
		
		$('#conteudoReact').show();
		ReactDOM.render(component, $(idElement)[0]);
	},

	WebForms: function (src) {
		$('#conteudoReact').hide();

		$('#conteudoWebForms').prop('src', 'http://localhost:5001' + src).show();
	},

}

export default RenderConfig;
