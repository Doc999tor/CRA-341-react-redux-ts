import { logger } from './logger-middleware'
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { sliceReducer } from './order-slice';

export const store = configureStore({
	reducer: {
		order: sliceReducer,
	},
	middleware: [ logger ]
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.Dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
