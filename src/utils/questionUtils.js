export function generateQuestion() {
    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const secondNumber = Math.floor(Math.random() * 10) + 1;

    return {
        components: [firstNumber, secondNumber],
        answer: firstNumber + secondNumber
    }
}
