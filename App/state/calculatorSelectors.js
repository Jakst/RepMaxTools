import { createSelector } from 'reselect'

const getInputWeight = state => state.calculator.weight
const getInputReps = state => state.calculator.reps

export const repMaxSelector = createSelector([getInputWeight, getInputReps], (weight, reps) => {
    const values = Array.apply(null, { length: 20 })

    const oneRepMax = calculateOneRepMax(weight, reps)

    return values.map((_, index) =>
        calculateNthRepMax(oneRepMax, index + 1))
})

export const oneRepMaxSelector = createSelector([getInputWeight, getInputReps], (weight, reps) =>
    calculateOneRepMax(weight, reps))

export const percentagesSelector = createSelector([getInputWeight, getInputReps], (weight, reps) => {
    const values = Array.apply(null, { length: 12 })
    let percentage = 100

    const oneRepMax = calculateOneRepMax(weight, reps)

    return values.map(() => {
        percentage -= 5

        return {
            percentage: percentage,
            weight: oneRepMax * percentage / 100
        }
    })
})

const calculateOneRepMax = (weight: number, reps: number) => {
    let value = weight

    if (reps > 1 && reps <= 10)
        value = weight * 36 / (37 - reps)

    if (reps > 10)
        value = weight * (1 + reps / 30)

    return Math.round(value * 10) / 10
}

const calculateNthRepMax = (weight: number, n: number) => {
    let value = weight

    if (n > 1 && n <= 10)
        value = weight * (37 - n) / 36

    if (n > 10)
        value = weight / (1 + n / 30)

    return Math.round(value * 10) / 10
}
