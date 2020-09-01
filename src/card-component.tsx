import React, { Component } from 'react';

import { OrderCard } from './app/order'

export class CardComponent extends Component< { card: OrderCard }, {} > {
	render () {
		const { card } = this.props
		return <li className="card">
			<h4 className="card-title">{ card.name }</h4>
			<span className="card-value">{ card.value }</span>
		</li>
	}
}
