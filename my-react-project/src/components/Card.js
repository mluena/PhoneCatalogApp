import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		selection: PropTypes.func.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	}
	render() {
		return(
			<li className="card-container" onClick={this.props.selection}>
				<h2 className="img-title">{this.props.title}</h2>
				<img className="phone-img" alt={`${this.props.title}`} src={`${this.props.url}`}/>
				<button className="purchase-btn">Comprar</button>
				<p className="price">{this.props.price}</p>
			</li>
		);
	}
}

export default Card;