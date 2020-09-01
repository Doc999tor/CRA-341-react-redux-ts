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
	initialState: {} as OrderState,
	reducers: {
		fetchInitialData: (): AppThunk => {
			console.log('AppThunk');
			return dispatch => {
				// fetch(url)
				console.log('fetchInitialData');
				Promise.resolve().then(() => dispatch(loadInitialData))
		}},
		loadInitialData: (state, action: PayloadAction<OrderState>) => {
			state = action.payload
		},
		increment: state => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
});

export const { increment, incrementByAmount, fetchInitialData, loadInitialData } = orderSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.order.value;

export const { reducer: sliceReducer } = orderSlice
