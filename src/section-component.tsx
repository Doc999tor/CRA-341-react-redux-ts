import React, { Component } from 'react';

import { OrderSection } from './app/order'
import { CardComponent } from './card-component'

export class SectionComponent extends Component< { section: OrderSection }, {} > {
	render () {
		const { section } = this.props
		return <li className='section'>
			<h3>{ section.name }</h3>
			<ul className='cards-container'>{
				section.cards.map(card => <CardComponent key={ card.name } card={ card } />)
			}</ul>
		</li>
	}
}
