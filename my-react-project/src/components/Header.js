import React from 'react';
import logo from '../logo.png';

class Header extends React.Component {

	render() {
		return(
            <div className="app-header">
                <img className="app-logo" alt="logo-másmovil" src={logo} />
                <h1 className="app-title">MÓVILES</h1>
                <h2 className="app-title">Las mejores móviles al precio más bajo.</h2>
            </div>
		);
	}
}

export default Header;