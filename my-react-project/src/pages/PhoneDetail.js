import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class UnconnectedPhoneDetail extends React.Component {
	render() {
		return (
            <div className="detail__view-wrapper">
                <Link to='/'><button className="menu-btn">Volver</button></Link>
                <div className="detail-wrapper">
                    <p className="description">{this.props.description}</p>
                </div>
            </div>
           
		);
	}
}

const defaultPhone = 'https://www.lifewire.com/thmb/qLv10Pgd30kCy7OxXacwOWKxZ8M=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg'

const mapStateToProps = (state, ownProps) => {

    // this.props.match.params.photoId
    // ownProps.match.params.photoId
    const phone = state.phones.find(phone => {
        return phone.id === parseInt(ownProps.match.params.phoneId)
    })

	return {
		description: phone ? phone.description : defaultPhone
	}
}

const connection = connect(mapStateToProps);
const PhoneDetail = connection(UnconnectedPhoneDetail);

export default PhoneDetail;