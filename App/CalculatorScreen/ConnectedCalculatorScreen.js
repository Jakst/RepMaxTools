import { connect } from 'react-redux'
import CalculatorScreen from './CalculatorScreen'
import { decreaseWeight, increaseWeight, changeWeight, changeReps } from '../state/calculatorReducer'
import { repMaxSelector } from '../state/calculatorSelectors'

const mapStateToProps = state => ({
	weight: state.calculator.weight,
	reps: state.calculator.reps,
    unit: state.units.weightUnit,
	repMaxList: repMaxSelector(state),
	steppingValue: state.calculator.increment
})

const mapDispatchToProps = dispatch => ({
	onDecreaseButtonClicked: () => dispatch(decreaseWeight()),
	onIncreaseButtonClicked: () => dispatch(increaseWeight()),
	onWeightChange: (value) => dispatch(changeWeight(value)),
	onRepChange: (value) => dispatch(changeReps(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorScreen)
