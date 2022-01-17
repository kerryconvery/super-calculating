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

const TwoDigitSubtractionQuestion = {
    generate: () => {
        const firstNumber = Math.floor(Math.random() * 10) + 1;
        const secondNumber = Math.floor(Math.random() * 10) + 1;

        let value = `${firstNumber} - ${secondNumber}`

        if (firstNumber < secondNumber) {
            value = `${secondNumber} - ${firstNumber}`
        }

        return Question.set({
            value,
            answer: Math.abs(firstNumber - secondNumber)
        })
    }
}

export function generateQuestion() {
    if (Math.random() >= 0.5) {
        return TwoDigitAdditionQuestion.generate()
    } else {
        return TwoDigitSubtractionQuestion.generate()
    }
}
