// @flow
import React from 'react'
import {
    ScrollView,
    Slider,
    TouchableNativeFeedback
} from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import RepMaxList from './RepMaxList'
import Button from './Button'
import RepSlider from './RepSlider'
import strings from '../strings'
import colors from '../colors'
import Analytics from 'react-native-firebase-analytics'

const MainView = styled.View`
    margin-bottom: 32px
`

const ControlRow = styled.View`
    flex-direction: row
    align-items: center
    margin: 0 16px
`

const ControlText = styled.Text`
    font-size: 18
    color: ${colors.TEXT_MEDIUM}
    text-align: center
    margin-top: 16px
`

const WeightInput = styled.TextInput`
    font-size: 18
    flex: 1
    text-align: center
    margin: 0 8px
`

const BigTitle = styled.Text`
    font-size: 20
    text-align: center
    margin-top: 16px
`

const unitFormatter = (value: number, unit: string) =>
    `${value > 0 ? '+' : ''}${value} ${unit}`

const isNumber = (value: string) => !(isNaN(value) || isNaN(value.slice(-1)))

type Props = {
    weight: number,
    reps: number,
    unit: string,
    repMaxList?: Array<number>,
    steppingValue: number,
    onDecreaseButtonClicked: () => mixed,
    onIncreaseButtonClicked: () => mixed,
    onWeightChange: () => mixed,
    onRepChange: () => mixed
}

type State = {
    blocked: boolean,
    weight: string
}

class Calculator extends React.PureComponent {
    state: State
    onWeightInputFocused: () => mixed
    onWeightInputBlurred: () => mixed
    onWeightInputTextChanged: () => mixed

    constructor(props: Props) {
        super(props)

        this.state = {
            blocked: false,
            repsBlocked: false,
            weight: '0.0'
        }

        this.onWeightInputFocused = this.onWeightInputFocused.bind(this)
        this.onWeightInputBlurred = this.onWeightInputBlurred.bind(this)
        this.onWeightInputTextChanged = this.onWeightInputTextChanged.bind(this)
    }

    componentWillReceiveProps(nextProps: Props) {
        if (!this.state.blocked)
            this.setState({ weight: `${nextProps.weight.toString()} ${nextProps.unit}` })
    }

    componentDidMount() {
        this.onWeightInputBlurred()
    }

    onWeightInputFocused() {
        this.setState({
            blocked: true,
            weight: ''
        })
    }

    onWeightInputBlurred() {
        this.setState({
            blocked: false,
            weight: `${this.props.weight} ${this.props.unit}`
        })
    }

    onWeightInputTextChanged(value: string) {
        const { onWeightChange } = this.props

        const normalizedValue = value
            .replace(/,/g, '.')
            .replace(/[^0-9.]/g, '')
            .replace(/(\..*)\./g, '$1')

        this.setState({ weight: normalizedValue })

        if (isNumber(value)) {
            onWeightChange(value)
        }
    }

    render() {
        const { weight } = this.state
        const {
            unit,
            reps,
            repMaxList,
            steppingValue,
            onDecreaseButtonClicked,
            onIncreaseButtonClicked,
            onRepChange
        } = this.props

        return (
            <ScrollView>
                <MainView>
                    <ControlText>
                        {strings.WEIGHT_LIFTED}
                    </ControlText>

                    <ControlRow>
                        <Button
                            title={unitFormatter(-steppingValue, unit)}
                            onPress={onDecreaseButtonClicked}
                        />

                        <WeightInput
                            keyboardType="numeric"
                            value={weight}
                            onChangeText={this.onWeightInputTextChanged}
                            onFocus={this.onWeightInputFocused}
                            onBlur={this.onWeightInputBlurred}
                            underlineColorAndroid={colors.SECONDARY}
                        />

                        <Button
                            title={unitFormatter(steppingValue, unit)}
                            onPress={onIncreaseButtonClicked}
                        />
                    </ControlRow>

                    <ControlText>
                        {strings.repsPerformed(reps)}
                    </ControlText>

                    <RepSlider
                        value={reps}
                        onRepChange={onRepChange}
                    />

                    <BigTitle>
                        {strings.YOUR_MAX_WEIGHT}
                    </BigTitle>

                    <RepMaxList values={repMaxList} unit={unit} />
                </MainView>
            </ScrollView>
        )
    }
}

Calculator.propTypes = {
    weight: PropTypes.number,
    reps: PropTypes.number,
    unit: PropTypes.string,
    repMaxList: PropTypes.arrayOf(PropTypes.number),
    steppingValue: PropTypes.number,
    onDecreaseButtonClicked: PropTypes.func.isRequired,
    onIncreaseButtonClicked: PropTypes.func.isRequired,
    onWeightChange: PropTypes.func.isRequired,
    onRepChange: PropTypes.func.isRequired
}

export default Calculator
