import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PhoneList from './pages/PhoneList';
import PhoneDetail from './pages/PhoneDetail';
import { fetchPhonesFulfilled } from "./redux/phones";
import { connect } from "react-redux";
import './css/main.css';


class UnConnectedApp extends React.Component {
	componentDidMount () {
		fetch ('http://localhost:5000/api/phones')
			.then(response => response.json())
			.then(json => {
				this.props.dispatch(fetchPhonesFulfilled(json))
			});
	}


  render() {
	console.log(this.props.phones)
    return (
		<div className="main-container">
			<Header />
			<Switch>
				<Route exact path='/' component={PhoneList} />
				<Route path='/detail-view/:phoneId' render={(props) => <PhoneDetail phones={[]} {...props} />} />
			</Switch>
		</div>
		);
	}
}

const connection = connect(null, null, null, { pure: false })
const App = connection(UnConnectedApp)

export default App;
