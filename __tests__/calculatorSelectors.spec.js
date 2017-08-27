import { repMaxSelector, percentagesSelector } from 'state/calculatorSelectors'

describe('Rep max selector', () => {
    it('Zeros all RMs if weight is zero', () => {
        const state = {
            calculator: {
                weight: 0,
                reps: 20,
                increment: 2.5
            }
        }

        const repMaxList = repMaxSelector(state)

        expect(repMaxList).toEqual([
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0
        ])
    })

    it('Leaves input values intact', () => {
        const state = {
            calculator: {
                weight: 127.5,
                reps: 8,
                increment: 2.5
            }
        }

        const repMaxList = repMaxSelector(state)

        expect(repMaxList[7]).toBe(127.5)
    })

    // it('Calculates RM 1-10 with Epleys formula', () => {
    //     const state = {
    //         calculator: {
    //             weight: 127.5,
    //             reps: 8,
    //             increment: 2.5
    //         }
    //     }
    //
    //     const repMaxList = repMaxSelector(state)
    //
    //     expect(repMaxList[7]).toBe(127.5)
    // })
})

describe('Percentage selector', () => {
    it('Zeros all percentages if weight is zero', () => {
        const state = {
            calculator: {
                weight: 0,
                reps: 20,
                increment: 2.5
            }
        }

        const percentageList = percentagesSelector(state)

        expect(percentageList).toEqual([
            {percentage: 95, weight: 0},
            {percentage: 90, weight: 0},
            {percentage: 85, weight: 0},
            {percentage: 80, weight: 0},
            {percentage: 75, weight: 0},
            {percentage: 70, weight: 0},
            {percentage: 65, weight: 0},
            {percentage: 60, weight: 0},
            {percentage: 55, weight: 0},
            {percentage: 50, weight: 0},
            {percentage: 45, weight: 0},
            {percentage: 40, weight: 0}
        ])
    })

    it('Calculates a list of percentages separated by 5% down to 40%', () => {
        const state = {
            calculator: {
                weight: 200,
                reps: 15
            }
        }

        const percentageList = percentagesSelector(state)

        expect(percentageList).toEqual([
            {percentage: 95, weight: 285},
            {percentage: 90, weight: 270},
            {percentage: 85, weight: 255},
            {percentage: 80, weight: 240},
            {percentage: 75, weight: 225},
            {percentage: 70, weight: 210},
            {percentage: 65, weight: 195},
            {percentage: 60, weight: 180},
            {percentage: 55, weight: 165},
            {percentage: 50, weight: 150},
            {percentage: 45, weight: 135},
            {percentage: 40, weight: 120}
        ])
    })
})
