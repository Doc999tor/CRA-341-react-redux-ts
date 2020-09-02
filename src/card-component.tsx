import React, { Component } from 'react';
import * as classnames from 'classnames'

import { OrderCard } from './app/order-slice'
import './card-component.css'

interface CardProps {
	card: OrderCard,
	updateValue: (value: any, name: string) => void
}
interface CardState {
	isEditingMode: boolean
}
export class CardComponent extends Component< CardProps, CardState > {
	state = {
		isEditingMode: false,
	}
	inputRef = React.createRef()

	enterEditMode = () => {
		this.setState({ isEditingMode: true })
	}

	saveValue = () => {
		this.props.updateValue((this.inputRef.current as HTMLInputElement).value, this.props.card.name)
		this.setState({ isEditingMode: false })
	}
	discardEditingMode = () => {
		this.setState({ isEditingMode: false })
	}

	render () {
		console.log(this.state);
		const { card } = this.props
		const styles = { '--aspect-ratio': card.aspect_ratio } as React.CSSProperties

		return <li className={ classnames( 'card', { editing: this.state.isEditingMode }) } style={ styles } >
			{
				this.state.isEditingMode
				? <>
					<div className="btn-container">
						<button className="btn save-btn"
							onClick={ this.saveValue }
						>✓</button>
						<button className="btn discard-btn" onClick={ this.discardEditingMode }>✗</button>
					</div>
					<h4 className="card-title">{ card.name }</h4>
					<input ref={ this.inputRef } type="text" className="card-text-field" defaultValue={ card.value }
					/>
				</>
				: <>
					<div className="btn-container">
						<button className="btn edit-btn" onClick={ this.enterEditMode }>✎</button>
					</div>
					<h4 className="card-title">{ card.name }</h4>
					<span className="card-value">{ card.value }</span>
				</>
			}
		</li>
	}
}
