// @flow
import { Map } from 'immutable'

export const SET_UNIT = 'units/SET_UNIT'

export const units = {
	METRIC: 'kg',
	IMPERIAL: 'lbs'
}

export const setUnit = (unit: 'kg' | 'lbs' ) => (
	({ type: SET_UNIT, unit })
)

const initialState = Map({
	weightUnit: units.METRIC
})

export default (state: Object = initialState, action: Object) => {
	switch (action.type) {
		case SET_UNIT:
			return state.set('weightUnit', action.unit)

		default:
			return state
	}
}
