// @flow
import React from 'react'
import PropTypes from 'prop-types'
import {
    Button,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    ToolbarAndroid,
    View
} from 'react-native'
import { TabNavigator } from 'react-navigation'
import Analytics from 'react-native-firebase-analytics'
import CalculatorScreen from './CalculatorScreen'
import PercentagesScreen from './PercentagesScreen'
import Toolbar from './components/Toolbar'
import styled from 'styled-components/native'
import colors from './colors'
import strings from './strings'

const Wrapper = styled.View`
    flex: 1
`

const tabSetup = {
    Calculator: {
        screen: CalculatorScreen,
        navigationOptions: { title: strings.repMaxTabName }
    },
    Percentages: {
        screen: PercentagesScreen,
        navigationOptions: { title: strings.percentagesTabName }
    }
}

const tabOptions = {
    style: {
        backgroundColor: colors.PRIMARY
    },
    indicatorStyle: {
        backgroundColor: colors.SECONDARY
    }
}

const Navigator = TabNavigator(tabSetup, { tabBarOptions: tabOptions, navigator: null })

const toolbarActions = [
    { title: strings.settings, iconName: 'settings', iconSize: 30, show: 'never' }
    // { title: 'Follow me on Twitter', iconName: 'logo-twitter', iconColor: "#4099FF", show: 'ifRoom' },
]

const n = (a, b , c) => {
    if (c.routeName === 'Calculator') {
        console.log('repmax')
        Analytics.logEvent('view_visited', {
            'view_name': 'Tab-RepMax'
        })
    } else if (c.routeName === 'Percentages') {
        console.log('percent')
        Analytics.logEvent('view_visited', {
            'view_name': 'Tab-Percentages'
        })
    }
}

class TabHolder extends React.PureComponent {
    onActionSelected: Function

    constructor(props: Object) {
        super(props)

        this.onActionSelected = this.onActionSelected.bind(this)
    }

    onActionSelected(position: number) {
        const { navigation } = this.props

        if (!navigator)
            return

        switch (position) {
            case -1: {
                navigation.goBack()
                break
            }

            case 0: {
                console.log('settings')
                Analytics.logEvent('view_visited', {
                    'view_name': 'Settings'
                })

                navigation.navigate('Settings')
                break
            }
        }
    }

    render() {
        return (
            <Wrapper>
                <Toolbar
                    overflowIconName="dots-vertical"
                    actions={toolbarActions}
                    onActionSelected={this.onActionSelected}
                />

                <Navigator onNavigationStateChange={n} />
            </Wrapper>
        )
    }
}

TabHolder.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default TabHolder
