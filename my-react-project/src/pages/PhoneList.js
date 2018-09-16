import React from 'react';
import Card from '../components/Card';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { sortphonesAscending, sortphonesDescending } from "../redux/phones";

// sortphonesAscending
// sortphonesDescending

class UnconnectedphoneList extends React.Component {
	static propTypes = {
		phones: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			thumbnailUrl: PropTypes.string.isRequired,
		})).isRequired
	}

	onSort = () => {
		if (this.props.sortDirection === "ASC") {
			this.props.dispatch(sortphonesDescending())
		} else {
			this.props.dispatch(sortphonesAscending())
		}
	}

	renderphone (phone) {
		return (
			<Card
				key={phone.id}
				url={phone.url}
				title={phone.title}
				thumbnailUrl={phone.thumbnailUrl}
				selection={() => {
					this.props.history.push(`/detail-view/${phone.id}`)
				}}
			/>
		)
	}
	
	render() {
		return(
			<div className="grid-wrapper">
				<button type="button" className="sort-btn" onClick={this.onSort}></button>
				<ul className="phones__main-container">
					{this.props.phones.map((phone) => this.renderphone(phone))}
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
const phoneList = connection(UnconnectedphoneList);

export default phoneList;