import * as TwoDigitQuestionStrategy from './twoDigitQuestionStrategy'
import * as FourDigitQuestionStrategy from './fourDigitQuestionStrategy'
import { generateQuestion } from './questionGenerator'

describe('when generating a question', () => {
    it('it returns back a two number question when a random number is less than 0.5', () => {
        const twoDigitQuestion = { value: '4 + 5', answer: 9 }

        jest.spyOn(Math, 'random').mockReturnValue(0.4)
        jest.spyOn(TwoDigitQuestionStrategy, 'generateTwoDigitQuestion').mockReturnValue(twoDigitQuestion)

        const question = generateQuestion()

        expect(question).toEqual({ value: '4 + 5', answer: 9 })
    })

    it('it returns back a two number question when a random number is equal to 0.5', () => {
        const twoDigitQuestion = { value: '4 + 5', answer: 9 }

        jest.spyOn(Math, 'random').mockReturnValue(0.5)
        jest.spyOn(TwoDigitQuestionStrategy, 'generateTwoDigitQuestion').mockReturnValue(twoDigitQuestion)

        const question = generateQuestion()

        expect(question).toEqual({ value: '4 + 5', answer: 9 })
    })

    it('return back a four number generator when a random number is greater than 0.5', () => {
        const fourDigitQuestion = { value: '4 + 5 - 2 + 3', answer: 10 }

        jest.spyOn(Math, 'random').mockReturnValue(0.6)
        jest.spyOn(FourDigitQuestionStrategy, 'generateFourDigitQuestion').mockReturnValue(fourDigitQuestion)

        const question = generateQuestion()

        expect(question).toEqual({ value: '4 + 5 - 2 + 3', answer: 10 })
    })
})
