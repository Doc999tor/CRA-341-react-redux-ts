import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { Dispatch } from './app/store'
import { fetchInitialData } from './app/order-slice'
import { OrderComponent } from './order-component'
import './App.css';

class App extends Component<AppProps, null> {
	componentDidMount() {
		// this.props.fetchInitialData();
		this.props.dispatch(fetchInitialData())
	}
	render () {
		return (
			<OrderComponent />
		);
	}
}

// const mapDispatchToProps = (dispatch: Dispatch) => ({
// 	fetchInitialData: () => dispatch(fetchInitialData())
// })

const connector = connect()
type AppProps = ConnectedProps<typeof connector>

export default connector(App)
