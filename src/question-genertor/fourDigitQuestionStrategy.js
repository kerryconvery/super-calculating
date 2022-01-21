import randomMathQuestion from "random-math-question";
import simpleEval from 'simple-eval'
import Question from "./Question";

export function generateFourDigitQuestion() {
    return Question.create(generatePositiveMathQuestion(generateRandomMathQuestion))
}

function generatePositiveMathQuestion(questionGenerator) {
    let randomQuestion
    do {
        randomQuestion = questionGenerator()
    } while (randomQuestion.answer < 0 || containsNegativeEvaluation(randomQuestion.question))

    return randomQuestion
}

function containsNegativeEvaluation(mathExpression) {
    const expressionParts = mathExpression.split(' ')
    let partialExpression = ''

    for(let index = 0; index < expressionParts.length; index++) {
        partialExpression = `${partialExpression}${expressionParts[index]}`

        if (tryEvaluateExpression(partialExpression) < 0) {
            return true
        }
    }

    return false
}

function tryEvaluateExpression(mathExpression) {
    try {
        return simpleEval(mathExpression)
    } catch {
        return;
    }
}

function generateRandomMathQuestion() {
    return randomMathQuestion.get({
        numberRange: '0-10',
        amountOfNumber: '3-4',
        operations: ['+', '-'],
    })
}
