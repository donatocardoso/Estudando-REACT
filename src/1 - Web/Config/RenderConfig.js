import $ 		from 'jquery';
import React 	from 'react';
import ReactDOM from 'react-dom';
import Request 	from 'react-http-request';

import Error404 from '../JSX/Error404';

const RenderConfig = {

	React: function (component, idElement) {
		$('#conteudoWebForms').hide();
		
		$('#conteudoReact').show();
		ReactDOM.render(component, $(idElement)[0]);
	},

	WebForms: function (src) {
		$('#conteudoReact').hide();

		RequestWebForms(src, 'get')
			? $('#conteudoWebForms').prop('src', 'http://localhost:5001' + src).show()
			: RenderConfig.Error404();
	},

	Error404: function () {
		RenderConfig.React(<Error404 />, '#conteudoReact');
	},

}

const RequestWebForms = function(url, method) {
	return (
		<Request url={'http://localhost:5001' + url} method={method} accept='application/json' verbose={true}>
			{
				({error, result, loading}) => {
					if (!loading)
						return <div>{ JSON.stringify(result) }</div>;
				}
			}
		</Request>
	);
}

export default RenderConfig;
