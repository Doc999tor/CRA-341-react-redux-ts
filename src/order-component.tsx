import React, {  } from 'react';
import * as classnames from 'classnames'
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from './app/store'
import { SectionComponent } from './section-component'
import './order-component.css';

function OrderComponent(props: OrderProps) {
	return props.id ? <div className="page">
		<header>
			<h1>Details of change order { props.id }</h1>
			<h2>{ props.name }</h2>
		</header>
		<main>
			<ul className="information-area">{
				Object.keys(props.sections).map(sectionName =>
					<SectionComponent
						key={ props.sections[sectionName].name }
						section={ props.sections[sectionName] }
					/>)
			}</ul>
		</main>
	</div> : null
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
