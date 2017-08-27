// @flow
import React from 'react'
import {
	Button,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	ToolbarAndroid,
	View
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import SettingsScreen from './SettingsScreen'
import TabHolder from './TabHolder'
import styled from 'styled-components/native'
import colors from './colors'

// $FlowFixMe
console.ignoredYellowBox = [
	'Warning: View.propTypes',
	'Warning: BackAndroid',
	'Remote debugger'
]

const Wrapper = styled.View`
    flex: 1
`

const stackSetup = {
	Tabs: { screen: TabHolder },
	Settings: { screen: SettingsScreen }
}

const stackOptions = {
	navigationOptions: { header: null }
}

const Navigator = StackNavigator(stackSetup, stackOptions)

const App = () => (
	<Wrapper>
		<StatusBar backgroundColor={colors.PRIMARY_DARK} barStyle="light-content" />
		<Navigator />
	</Wrapper>
)

export default App
