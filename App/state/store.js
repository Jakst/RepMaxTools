import { applyMiddleware, compose, createStore } from 'redux'
import { AsyncStorage } from 'react-native'
import { combineReducers } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import logger from 'redux-logger'
import calculator from './calculatorReducer'
import units from './unitsReducer'

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

persistStore(store, { storage: AsyncStorage })

export default store
