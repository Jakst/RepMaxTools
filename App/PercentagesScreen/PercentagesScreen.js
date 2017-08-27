import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import colors from '../colors'
import strings from '../strings'

const MainView = styled.View`
    margin-bottom: 32
    align-items: center
`

const ControlText = styled.Text`
    font-size: 18
    color: ${colors.TEXT_MEDIUM}
    margin-top: 16
`

const BigTitle = styled.Text`
    font-size: 24
    margin-top: 16
    margin-bottom: 8
    color: black
`

const Percentage = styled.Text`
    font-size: 20
`

const Percentages = ({ oneRepMax, unit, percentages }) => (
    <ScrollView>
        <MainView>
            <ControlText>
                {strings.yourOneRepMax(oneRepMax, unit)}
            </ControlText>

            <BigTitle>
                {strings.PERCENTAGES_OF_ONE_REPMAX}
            </BigTitle>

            {percentages.map((value, index) => (
                <Percentage key={index}>
                    {value.percentage} %: {(Math.round(value.weight * 10) / 10).toFixed(1)} {unit}
                </Percentage>
            ))}
        </MainView>
    </ScrollView>
)

Percentages.propTypes = {
    oneRepMax: PropTypes.number,
    percentages: PropTypes.arrayOf(
        PropTypes.shape({
            percentage: PropTypes.number,
            weight: PropTypes.number
        })
    ),
    unit: PropTypes.string
}

export default Percentages
