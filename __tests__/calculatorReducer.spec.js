import reducer, { increaseWeight, decreaseWeight, changeWeight, changeReps } from 'state/calculatorReducer'
import { units, setUnit } from 'state/unitsReducer'

const initialState = {
    weight: 122.5,
    reps: 8,
    increment: 2.5
}

describe('Calculator reducer', () => {
    it('adds increment to weight', () => {
        const nextState = reducer(initialState, increaseWeight())

        expect(nextState).toEqual({
            weight: 125,
            reps: 8,
            increment: 2.5
        })
    })

    it('subtracts increment from weight', () => {
        const nextState = reducer(initialState, decreaseWeight())

        expect(nextState).toEqual({
            weight: 120,
            reps: 8,
            increment: 2.5
        })
    })

    it('does not decrease weight to below zero', () => {
        const state = { ...initialState, weight: 1.5 }

        const nextState = reducer(state, decreaseWeight())

        expect(nextState).toEqual({
            weight: 0,
            reps: 8,
            increment: 2.5
        })
    })

    it('can be changed to any positive weight', () => {
        const nextState = reducer(initialState, changeWeight(245))

        expect(nextState).toEqual({
            weight: 245,
            reps: 8,
            increment: 2.5
        })
    })

    it('changes to zero instead of a negative weight', () => {
        const nextState = reducer(initialState, changeWeight(-20))

        expect(nextState).toEqual({
            weight: 0,
            reps: 8,
            increment: 2.5
        })
    })

    it('updates number of reps', () => {
        const nextState = reducer(initialState, changeReps(14))

        expect(nextState).toEqual({
            weight: 122.5,
            reps: 14,
            increment: 2.5
        })
    })


    it('changes to one instead of negative reps', () => {
        const nextState = reducer(initialState, changeReps(-20))

        expect(nextState).toEqual({
            weight: 122.5,
            reps: 1,
            increment: 2.5
        })
    })

    it('changes increment when unit changes', () => {
        let nextState

        nextState = reducer(initialState, setUnit(units.IMPERIAL))
        expect(nextState.increment).toBe(5)

        nextState = reducer(initialState, setUnit(units.METRIC))
        expect(nextState.increment).toBe(2.5)
    })
})
