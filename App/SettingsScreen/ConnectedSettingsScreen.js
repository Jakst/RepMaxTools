import { connect } from 'react-redux'
import SettingsScreen from './SettingsScreen'
import { setUnit } from '../state/unitsReducer'

const mapStateToProps = state => ({
    unit: state.units.weightUnit,
    increment: state.calculator.increment
})

const mapDispatchToProps = dispatch => ({
	onUnitToggled: (unit) => dispatch(setUnit(unit))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
