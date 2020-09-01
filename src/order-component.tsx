import React, {  } from 'react';
import * as classnames from 'classnames'
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from './app/store'

function OrderComponent(props: OrderProps) {
	console.log(props);
	return <div className='page'>
		<header>
			<h1>Details of { props.id }</h1>
			<h2>{ props.name }</h2>
		</header>
		<main>
			<ul>{
				Object.keys(props.sections).map(sectionName => <li key={ sectionName } className='section'>
					<h3>{ props.sections[sectionName].name }</h3>
					<ul className='cards-container'>{
						props.sections[sectionName].cards.map(card => <li key={ card.name } className="card">
							<h4 className="card-title">{ card.name }</h4>
							<span className="card-value">{ card.value }</span>
						</li>)
					}</ul>
				</li>)
			}</ul>
		</main>
	</div>
}

const mapStateToProps = (state: RootState) => ({
	id: state.order.id,
	name: state.order.name,
	sections: state.order.sections,
})

const connector = connect(mapStateToProps)
type OrderProps = ConnectedProps<typeof connector>

const component = connector(OrderComponent)

export { component as OrderComponent }
