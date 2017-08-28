export default {
	appTitle: 'Rep Max Tools',
	repMaxTabName: 'Rep Max',
	percentagesTabName: 'Percentages',
	settings: 'Settings',
	WEIGHT_LIFTED: 'Weight lifted',
	YOUR_MAX_WEIGHT: 'Your max weights',
	PERCENTAGES_OF_ONE_REPMAX: '1RM percentages',
	SETTINGS_METRIC_TITLE: 'Use imperial units',
	SETTINGS_METRIC_DESCRIPTION: 'Current increment',

	yourOneRepMax: (oneRepMax, unit) => `Your one rep max is ${oneRepMax} ${unit}`,
	repsPerformed: (reps) => `${reps} ${reps < 2 ? 'rep' : 'reps'} performed`,
}
