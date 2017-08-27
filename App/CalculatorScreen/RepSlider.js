// @flow
import React from 'react'
import styled from 'styled-components/native'
import colors from '../colors'

type Props = {
    value: number,
    onRepChange: () => mixed
}

type State = {
    value: number,
    blocked: boolean
}

const Slider = styled.Slider`
    margin: 8px
`

class RepSlider extends React.PureComponent {
    state: State
    constructor(props: Props) {
        super(props)

        this.state = {
            value: 0,
            blocked: false
        }
    }

    componentWillMount() {
        this.setState({value: this.props.value})
    }

    componentWillReceiveProps(nextProps: Props) {
        if (!this.state.blocked)
            this.setState({value: nextProps.value})
    }

    render() {
        const { value, blocked } = this.state
        const { onRepChange } = this.props

        return (
            <Slider
                step={1}
                minimumValue={1}
                maximumValue={20}
                thumbTintColor={colors.SECONDARY}
                maximumTrackTintColor={colors.SECONDARY}
                value={value}
                onSlidingComplete={value => this.setState({ value, blocked: false })}
                onValueChange={value => {
                    onRepChange(value)

                    if (!blocked)
                        this.setState({ blocked: true })
                }}
            />
        )
    }
}

export default RepSlider
