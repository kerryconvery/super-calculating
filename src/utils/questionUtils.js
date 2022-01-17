import randomMathQuestion from 'random-math-question'

export const Question = {
    create: ({ question, answer }) => {
        return {
            value: question,
            answer,
        }
    },
    empty: () => {
        return {
            value: '',
            answer: 0
        }
    }
}

export function generateQuestion() {
    return Question.create(getRandomQuestion())
}

function getRandomQuestion() {
    let randomQuestion
    do {
        randomQuestion = randomMathQuestion.get({
            numberRange: '1-120',
            amountOfNumber: '2-4',
            operations: ['+', '-'],
        })
    } while (randomQuestion.answer < 0)

    return randomQuestion
}
