import styled from 'styled-components/native'
import { Button, ScrollView, Text, View, Switch } from 'react-native'
import colors from '../colors'

export const Wrapper = styled.View`
    flex: 1
`

export const SettingRow = styled.View`
    height: 56
    padding: 8px 16px
    border-bottom-width: 1px
    border-bottom-color: #ddd
    margin-bottom: 30px
    flex-direction: row
    justify-content: space-between
`

export const SettingTitle = styled.Text`
    color: ${colors.TEXT_DARK}
    font-size: 15
`

export const SettingDescription = styled.Text`
    color: ${colors.TEXT_MEDIUM}
    font-size: 14
`

export const Bold = styled.Text`
    font-weight: bold   
`