import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import store from './App/state/store'
import App from './App/App'

const RepMaxToolsApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

AppRegistry.registerComponent('RepMaxTools', () => RepMaxToolsApp)

export default RepMaxToolsApp
