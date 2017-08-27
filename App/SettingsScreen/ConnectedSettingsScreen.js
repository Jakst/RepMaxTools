import { connect } from 'react-redux'
import SettingsScreen from './SettingsScreen'
import { setUnit } from '../state/unitsReducer'

const mapStateToProps = state => ({
    unit: state.getIn(['units', 'weightUnit']),
    increment: state.getIn(['calculator', 'increment'])
})

const mapDispatchToProps = dispatch => ({
	onUnitToggled: (unit) => dispatch(setUnit(unit))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
