import randomMathQuestion from 'random-math-question'
import { generateQuestion } from './questionUtils'

describe('when generating a question', () => {
    it('generates a random question', () => {
        jest.spyOn(randomMathQuestion, 'get').mockReturnValueOnce({
            question: '8 + 2',
            answer: 10
        })

        const question = generateQuestion()

        expect(question).toEqual({
            value: '8 + 2',
            answer: 10
        })
    })

    it('retries until the answer is not negative', () => {
        const questions = [
            {question: '2 - 12', answer: -10},
            {question: '7 - 2', answer: 5}
        ]
        let iterationCount = 0

        jest.spyOn(randomMathQuestion, 'get').mockImplementation(() => {
            const question = questions[iterationCount]

            iterationCount = iterationCount + 1

            return question
        })

        const question = generateQuestion()

        expect(question).toEqual({
            value: '7 - 2',
            answer: 5
        })
    })
})
