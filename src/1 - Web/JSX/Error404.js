import '../Content/index.css';
import React, { Component } from 'react';

class Error404 extends Component {

	render() {
		return (
			<div id='divError404'>
                <div id='divIcon'>X</div>

                <p id='pTitle'>Error 404</p>
                <p id='pMsg'>
                    Lamentamos, mas a página que você está procurando não existe ou foi movida.
                    <br/>
                    Por favor, volte mais tarde.
                </p>
            </div>
		);
	}

}

export default Error404;
