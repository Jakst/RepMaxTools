import { connect } from 'react-redux'
import PercentagesScreen from './PercentagesScreen'
import { oneRepMaxSelector, percentagesSelector } from '../state/calculatorSelectors'

const mapStateToProps = state => ({
	oneRepMax: oneRepMaxSelector(state),
	percentages: percentagesSelector(state),
    unit: state.units.weightUnit
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PercentagesScreen)
