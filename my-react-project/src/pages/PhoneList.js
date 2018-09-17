import React from 'react';
import Card from '../components/Card';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { sortPhonesAscending, sortPhonesDescending } from "../redux/phones";

// sortPhonesAscending
// sortPhonesDescending

class UnconnectedPhoneList extends React.Component {
	static propTypes = {
		phones: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired
		})).isRequired
	}

	onSort = () => {
		if (this.props.sortDirection === "ASC") {
			this.props.dispatch(sortPhonesDescending())
		} else {
			this.props.dispatch(sortPhonesAscending())
		}
	}

	renderPhone (phone) {
		return (
			<Card
				key={phone.id}
				url={phone.url}
				title={phone.title}
				description={phone.description}
				price={phone.price}
				selection={() => {
					this.props.history.push(`/detail-view/${phone.id}`)
				}}
			/>
		)
	}
	
	render() {
		return(
			<div className="phones__main-container">
				<button type="button" className="sort-btn" onClick={this.onSort}></button>
				<ul className="grid-wrapper">
					{this.props.phones.map((phone) => this.renderPhone(phone))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		phones: state.phones,
		sortDirection: state.sortDirection
	}
}

const connection = connect(mapStateToProps);
const PhoneList = connection(UnconnectedPhoneList);

export default PhoneList;