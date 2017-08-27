// @flow
import { REHYDRATE } from 'redux-persist/constants'

export const SET_UNIT = 'units/SET_UNIT'

export const units = {
	METRIC: 'kg',
	IMPERIAL: 'lbs'
}

export const setUnit = (unit: 'kg' | 'lbs' ) => (
	({ type: SET_UNIT, unit })
)

const initialState = {
	weightUnit: units.METRIC
}

export default (state: Object = { ...initialState }, action: Object) => {
	switch (action.type) {
		case REHYDRATE: {
			const incoming = action.payload.units
			if (incoming && incoming.hasOwnProperty('weightUnit')) {
				return incoming
			}

			return { ...initialState }
		}

		case SET_UNIT:
			return action.unit === state.weightUnit
				? state
				: { ...state, weightUnit: action.unit }

		default:
			return state
	}
}
