export const Question = {
    set: ({ value, answer }) => {
        return {
            value,
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

const TwoDigitAdditionQuestion = {
    generate: () => {
        const firstNumber = Math.floor(Math.random() * 10) + 1;
        const secondNumber = Math.floor(Math.random() * 10) + 1;

        return Question.set({
            value: `${firstNumber} + ${secondNumber}`,
            answer: firstNumber + secondNumber
        })
    }
}

export function generateQuestion() {
    return TwoDigitAdditionQuestion.generate()
}
