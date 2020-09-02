import React, { Component } from 'react';
import * as classnames from 'classnames'

import { OrderSection } from './app/order-slice'
import { CardComponent } from './card-component'
import './section-component.css'

interface SectionComponentState {
	isClosed: boolean,
}
export class SectionComponent extends Component< { section: OrderSection }, SectionComponentState > {
	state = { isClosed: false }

	updateValue = (value: any, name: string) => {
		const { cards } = this.props.section
		const index = cards.findIndex(c => c.name === name)
		cards[index].value = value
	}

	toggleSection = e => {
		let { isClosed } = this.state
		this.setState({ isClosed: !isClosed })
	}

	render () {
		const { section } = this.props
		return <li className={ classnames( 'section', { closed: this.state.isClosed }) }>
			<h3 onClick={ this.toggleSection } >{ section.name }</h3>
			<ul className='cards-container'>{
				section.cards.map(card => <CardComponent key={ card.name } card={ card } updateValue={ this.updateValue } />)
			}</ul>
		</li>
	}
}
