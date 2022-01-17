import { generateQuestion } from './questionUtils'

describe('when generating a question', () => {
    const random = jest.spyOn(Math, 'random')

    it('returns an addition question when a randomly generated value is greater than 0.5', () => {
        random.mockReturnValueOnce(0.6)

        const question = generateQuestion()

        expect(question.value).toContain(' + ')
    })

    it('returns an addition question when a randomly generated value is equal to 0.5', () => {
        random.mockReturnValueOnce(0.5)

        const question = generateQuestion()

        expect(question.value).toContain(' + ')
    })

    it('returns an subtraction question when a randomly generated value is less than 0.5', () => {
        random.mockReturnValueOnce(0.4)

        const question = generateQuestion()

        expect(question.value).toContain(' - ')
    })
})
