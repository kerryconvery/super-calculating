export const TwoDigitQuestion = {
    empty: () => ({
        components: [],
        answer: 0
    }),
    set: (firstNumber, secondNumber) => (
        {
            components: [firstNumber, secondNumber],
            answer: firstNumber + secondNumber
        }
    ),
    toString: (question) => {
        return question.components.join(' + ')
    }
}

export function generateQuestion() {
    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const secondNumber = Math.floor(Math.random() * 10) + 1;

    return TwoDigitQuestion.set(firstNumber, secondNumber)
}
