import randomMathQuestion from 'random-math-question'
import { generateTwoDigitQuestion } from './twoDigitQuestionStrategy'

describe('Two digit question generator', () => {
    it('generates two digit questions where the maximum answer cannot exceed 120', () => {
        const generatedQuestion = {
            question: '8 + 2',
            answer: 10
        }
        const getRandomMathsQuestion = jest.spyOn(randomMathQuestion, 'get').mockReturnValue(generatedQuestion)
        const question = generateTwoDigitQuestion()

        expect(getRandomMathsQuestion).toHaveBeenCalledWith({
            numberRange: '0-60',
            amountOfNumber: '2-2',
            operations: ['+'],
        })
        expect(question).toEqual({
            value: '8 + 2',
            answer: 10
        })
    })
})
