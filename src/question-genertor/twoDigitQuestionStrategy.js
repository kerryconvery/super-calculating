import randomMathQuestion from "random-math-question";
import Question from "./Question";

export function generateTwoDigitQuestion() {
    const question = randomMathQuestion.get({
        numberRange: '0-60',
        amountOfNumber: '2-2',
        operations: ['+'],
    })

    return Question.create(question)
}
