export function generateNextQuestion() {
    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const secondNumber = Math.floor(Math.random() * 10) + 1;

    return [firstNumber, secondNumber]
}

export function getAnswer(question) {
    return question.reduce((total, number) => {
        return total + number
    }, 0)
}
