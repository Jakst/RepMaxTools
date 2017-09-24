import React from 'react'
import styled from 'styled-components/native'
import colors from './colors'
import Icon from 'react-native-vector-icons/FontAwesome'

const Container = styled.View`
	background-color: ${colors.PRIMARY};
	padding: 16px;
`

const Title = styled.Text`
	color: white;
	font-size: 16px;
`

const WeightController = styled.View`
	flex-direction: row;
	align-content: center;
	justify-content: flex-end;
	margin-bottom: 8px;
`

const WeightInput = styled.TextInput`
	color: #ff4081;
	font-size: 30px;
	font-family: sans-serif-light;
  flex: 1;
  text-align: center;
  margin: 0 8px
`

const RepController = styled.View`
	flex-direction: row;
	align-content: center;
	margin-bottom: 8px;
`

const FocusText = styled.Text`
	color: #ff4081;
	font-size: 30px;
	font-family: sans-serif-light;
`

const IconWrapper = styled.View`
	width: 48px;
	height: 48px;
	justify-content: center;
	align-items: center;
`

export default Controls = () => (
	<Container>
		<Title>Weight lifted</Title>
		<WeightController>
			<WeightInput>145.0 kg</WeightInput>
			<IconWrapper>
				<Icon name="minus" size={30} color="#fff" />
			</IconWrapper>
			<IconWrapper>
				<Icon name="plus" size={30} color="#fff" />
			</IconWrapper>
		</WeightController>
		<Title>Reps performed</Title>
		<RepController>
			<FocusText>8</FocusText>
		</RepController>
	</Container>
)
