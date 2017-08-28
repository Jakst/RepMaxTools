import reducer, { units, setUnit } from 'state/unitsReducer'

describe('Units reducer', () => {
    it('updates unit', () => {
        const state = {
            weightUnit: units.METRIC
        }

        const nextState = reducer(state, setUnit(units.IMPERIAL))

        expect(nextState).toEqual({
            weightUnit: units.IMPERIAL
        })
    })

    it('does not change state when unit is the same', () => {
        const state = {
            weightUnit: units.METRIC
        }

        const nextState = reducer(state, setUnit(units.METRIC))

        expect(nextState).toBe(state)
    })
})
