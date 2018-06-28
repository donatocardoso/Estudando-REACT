import ReactDOM from 'react-dom';
import $ from 'jquery';

const RenderConfig = {

	React: function (component, idElement) {
		$('#renderPage').hide();
		$('#conteudo').show();

		ReactDOM.render(component, document.getElementById(idElement));
	},

	WebForms: function (src) {
		$('#conteudo').hide();
		$('#renderPage').prop('src', 'http://localhost:5001' + src).show();
	},

}

export default RenderConfig;
