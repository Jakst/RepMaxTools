import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Container = styled.View`
    margin: 8px 16px 0
    flex-direction: row
    justifyContent: space-around
`

const Label = styled.Text`
    font-size: 16
`

const Value = styled.Text`
    margin-left: 8
    font-weight: bold
    font-size: 16
`

const Column = styled.View`
    flex-direction: row
`

const labelList = (start: number, count: number) => (
    Array.apply(null, { length: count }).map((_, index) => (
        <Label key={index}>
            {start + index}RM
        </Label>
    ))
)

const valueList = (values: Array<number>, unit: string) => (
    values.map((value, index) => (
        <Value key={index}>
            {(Math.round(value * 10) / 10).toFixed(1)} {unit}
        </Value>
    ))
)

const column = (values, offset, unit) => (
    <Column>
        <View>
            {labelList(offset, values.length)}
        </View>

        <View>
            {valueList(values, unit)}
        </View>
    </Column>
)

const RepMaxList = ({ values, unit }) => (
    <Container>
        {column(
            values.slice(0, Math.ceil(values.length / 2)),
            1,
            unit
        )}

        {column(
            values.slice(Math.ceil(values.length / 2)),
            Math.ceil(values.length / 2) + 1,
            unit
        )}
    </Container>
)

RepMaxList.propTypes = {
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
    unit: PropTypes.string.isRequired
}

export default RepMaxList
