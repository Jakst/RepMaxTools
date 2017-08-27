import { applyMiddleware, compose, createStore } from 'redux'
import { AsyncStorage } from 'react-native'
import { combineReducers } from 'redux-immutablejs'
import { persistStore, autoRehydrate } from 'redux-persist-immutable'
import { createLogger } from 'redux-logger'
import { Iterable } from 'immutable'
import calculator from './calculatorReducer'
import units from './unitsReducer'

const stateTransformer = state => {
	if (Iterable.isIterable(state)) return state.toJS()
	else return state
}

const logger = createLogger({
	stateTransformer
})

const reducer = combineReducers({
	calculator,
	units
})

const store = createStore(
	reducer,
	compose (
		applyMiddleware(logger),
		autoRehydrate()
	)
)

persistStore(store, {storage: AsyncStorage})

export default store
