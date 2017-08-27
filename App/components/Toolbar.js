import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../colors'
import strings from '../strings'

const Toolbar = (props) =>
    <Icon.ToolbarAndroid {...props} />

Toolbar.defaultProps = {
    title: strings.appTitle,
    titleColor: colors.TEXT_LIGHT,
    style: {
        height: 56,
        backgroundColor: colors.PRIMARY
    }
}

export default Toolbar
