import { REHYDRATE } from 'redux-persist/constants'
import { units, SET_UNIT } from './unitsReducer'

const INCREASE_WEIGHT = 'calculator/INCREASE_WEIGHT'
const DECREASE_WEIGHT = 'calculator/DECREASE_WEIGHT'
const CHANGE_WEIGHT = 'calculator/CHANGE_WEIGHT'
const CHANGE_REPS = 'calculator/CHANGE_REPS'

export const increaseWeight = () => ({ type: INCREASE_WEIGHT })
export const decreaseWeight = () => ({ type: DECREASE_WEIGHT })
export const changeWeight = (value: number) => ({ type: CHANGE_WEIGHT, value })
export const changeReps = (value: number) => ({ type: CHANGE_REPS, value })

const initialState = {
	weight: 20,
	reps: 5,
	increment: 2.5
}

export default (state = { ...initialState }, action) => {
	switch (action.type) {
		case REHYDRATE: {
			const incoming = action.payload.calculator
			if (incoming
				&& incoming.hasOwnProperty('weight')
				&& incoming.hasOwnProperty('reps')
				&& incoming.hasOwnProperty('increment')) {

				return incoming
			}

			return { ...initialState }
		}

		case INCREASE_WEIGHT:
			return {
				...state,
				weight: change(state.weight + state.increment)
			}

		case DECREASE_WEIGHT:
			return {
				...state,
				weight: change(state.weight - state.increment)
			}

		case CHANGE_WEIGHT:
			return action.value === state.weight
				? state
				: {
					...state,
					weight: change(action.value)
				}

		case CHANGE_REPS:
			return action.value === state.reps
				? state
				: {
					...state,
					reps: Math.max(action.value, 1)
				}

		case SET_UNIT: {
			switch(action.unit) {
				case units.METRIC:
					return state.increment === 2.5
						? state
						: { ...state, increment: 2.5 }

				case units.IMPERIAL:
					return state.increment === 5
						? state
						: { ...state, increment: 5 }
			}

			break
		}

		default:
			return state
	}
}

const change = (value) => Math.max(value, 0)
