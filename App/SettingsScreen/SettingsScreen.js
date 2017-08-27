// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, Switch, Text } from 'react-native'
import Toolbar from '../components/Toolbar'
import { units } from '../state/unitsReducer'
import strings from '../strings'
import { Wrapper, SettingRow, SettingTitle, SettingDescription, Bold } from './SettingsStyles'



const toggledUnit = (unit, func) => () => {
    if (unit === units.METRIC)
        func(units.IMPERIAL)
    else
        func(units.METRIC)
}

const SettingsScreen = ({ navigation, unit, increment, onUnitToggled}: Object) => (
    <Wrapper>
        <Toolbar
            title={strings.settings}
            navIconName="arrow-left"
            onIconClicked={ () => navigation.goBack() }
        />

        <ScrollView>
            <SettingRow>
                <View>
                    <SettingTitle>{strings.SETTINGS_METRIC_TITLE}</SettingTitle>
                    <SettingDescription>{strings.SETTINGS_METRIC_DESCRIPTION}: <Bold>{increment} {unit}</Bold></SettingDescription>
                </View>

                <Switch onValueChange={toggledUnit(unit, onUnitToggled)} value={unit === units.IMPERIAL} />
            </SettingRow>
        </ScrollView>
    </Wrapper>
)

SettingsScreen.propTypes = {
    unit: PropTypes.string,
    increment: PropTypes.number,
    onUnitToggled: PropTypes.func
}

export default SettingsScreen
