import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';

export interface OrderCard {
	name: string,
	value: any,
	type: 'number' | 'string' | 'date',
	aspect_ratio: number,
}

export interface OrderSection {
	name: string,
	cards: OrderCard[],
}

export interface OrderState {
	id: number,
	name: string,
	value: number,
	sections: {
		[key: string]: OrderSection,
	},
}

const initialState: OrderState = {
	id: 123,
	name: 'CIM Steel & Kenitics',
	sections: {
		general: {
			name: 'General Information',
			cards: [ {
				name: 'Division Code',
				value: 23456,
				type: 'number',
				aspect_ratio: 1,
			}, {
				name: 'Specification CSI Code',
				value: 654321,
				type: 'number',
				aspect_ratio: 1,
			}, {
				name: 'Subcontract Nickname',
				value: 'Doe John',
				type: 'string',
				aspect_ratio: 1,
			}, {
				name: 'Author',
				value: 'John Doe',
				type: 'string',
				aspect_ratio: 1,
			}, {
				name: 'Description',
				value: 'Fixed building, skylight changes, design assist.',
				type: 'string',
				aspect_ratio: 2,
			}, ],
		},
		submitted_costs: {
			name: 'Submitted Costs Information',
			cards: [ {
				name: 'Submitted Cost',
				value: 1000,
				type: 'number',
				aspect_ratio: 1,
			}, {
				name: 'Date Submitted',
				value: '2020-10-10',
				type: 'date',
				aspect_ratio: 1,
			}, {
				name: 'Insurance',
				value: 5000,
				type: 'number',
				aspect_ratio: 1,
			}, {
				name: 'Bond',
				value: 123,
				type: 'number',
				aspect_ratio: 1,
			}, ],
		},
	},
	value: 0,
};

export const orderSlice = createSlice({
	name: 'order',
	initialState: initialState,
	reducers: {
		fetchInitialData: (): AppThunk => dispatch => {
				// fetch(url)
				Promise.resolve().then(() => dispatch(loadInitialData))
		},
		loadInitialData: (state, action: PayloadAction<OrderState>) => {
			state = action.payload
		},
	},
});

export const { fetchInitialData, loadInitialData } = orderSlice.actions;

export const { reducer: sliceReducer } = orderSlice
