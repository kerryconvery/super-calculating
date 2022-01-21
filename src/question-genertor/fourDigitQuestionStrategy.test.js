import randomMathQuestion from 'random-math-question'
import { generateFourDigitQuestion } from './fourDigitQuestionStrategy'

describe('when generating a question', () => {
    it('generates a random 3 to 4 operation questions with digits between 0 and 10', () => {
        const generatedQuestion = {
            question: '8 + 2 - 1',
            answer: 9
        }
        const getRandomMathsQuestion = jest.spyOn(randomMathQuestion, 'get').mockReturnValueOnce(generatedQuestion)

        const question = generateFourDigitQuestion()

        expect(getRandomMathsQuestion).toHaveBeenCalledWith({
            numberRange: '0-10',
            amountOfNumber: '3-4',
            operations: ['+', '-'],
        })
        expect(question).toEqual({
            value: '8 + 2 - 1',
            answer: 9
        })
    })

    it.each([
        {question: '12 - 12 - 1', answer: -1},
        {question: '7 - 7 - 2 + 5', answer: 3}
    ])
        ('retries until the partial or full evaluation does not result in a negative value', (negativeQuestion) => {
        const questions = [
            negativeQuestion,
            {question: '7 - 2 + 1', answer: 6}
        ]
        let iterationCount = 0

        jest.spyOn(randomMathQuestion, 'get').mockImplementation(() => {
            const question = questions[iterationCount]

            iterationCount = iterationCount + 1

            return question
        })

        const question = generateFourDigitQuestion()

        expect(question).toEqual({
            value: '7 - 2 + 1',
            answer: 6
        })
    })
})
