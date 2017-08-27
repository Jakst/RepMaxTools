import React from 'react'
import { Text, TouchableNativeFeedback, View } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import colors from '../colors'

const Container = styled.View`
    background-color: ${colors.LIGHT_GRAY}
    padding: 8px 16px
    border-radius: 2
`

const ButtonText = styled.Text`
    color: ${colors.TEXT_DARK}
    font-size: 16
`

const Button = ({ onPress, title }) => (
    <TouchableNativeFeedback onPress={onPress}>
        <Container elevation={1}>
            <ButtonText>{title}</ButtonText>
        </Container>
    </TouchableNativeFeedback>
)

Button.propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}

export default Button