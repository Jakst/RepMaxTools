import { Map } from 'immutable'
import { units, SET_UNIT } from './unitsReducer'

const INCREASE_WEIGHT = 'calculator/INCREASE_WEIGHT'
const DECREASE_WEIGHT = 'calculator/DECREASE_WEIGHT'
const CHANGE_WEIGHT = 'calculator/CHANGE_WEIGHT'
const CHANGE_REPS = 'calculator/CHANGE_REPS'

export const increaseWeight = () => ({ type: INCREASE_WEIGHT })
export const decreaseWeight = () => ({ type: DECREASE_WEIGHT })
export const changeWeight = (value: number) => ({ type: CHANGE_WEIGHT, value })
export const changeReps = (value: number) => ({ type: CHANGE_REPS, value })

const initialState = Map({
	weight: 0,
	reps: 1,
	increment: 2.5
})

export default (state = initialState, action) => {
	switch (action.type) {
		case INCREASE_WEIGHT:
			return state.update('weight', weight => change(weight + state.get('increment')))

		case DECREASE_WEIGHT:
			return state.update('weight', weight => change(weight - state.get('increment')))

		case CHANGE_WEIGHT:
			return state.set('weight', change(action.value))

		case CHANGE_REPS:
			return state.set('reps', Math.max(action.value, 1))

		case SET_UNIT: {
			switch(action.unit) {
				case units.METRIC:
                    return state.set('increment', 2.5)

				case units.IMPERIAL:
					return state.set('increment', 5)
			}

			break
		}

		default:
			return state
	}
}

const change = (value) => Math.max(value, 0)
