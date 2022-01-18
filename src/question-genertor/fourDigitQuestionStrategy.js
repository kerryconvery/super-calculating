import randomMathQuestion from "random-math-question";
import Question from "./Question";

export function generateFourDigitQuestion() {
    return Question.create(generatePositiveMathQuestion(generateRandomMathQuestion))
}

function generatePositiveMathQuestion(questionGenerator) {
    let randomQuestion
    do {
        randomQuestion = questionGenerator()
    } while (randomQuestion.answer < 0)

    return randomQuestion
}

function generateRandomMathQuestion() {
    return randomMathQuestion.get({
        numberRange: '0-10',
        amountOfNumber: '3-4',
        operations: ['+', '-'],
    })
}
