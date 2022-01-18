import { generateTwoDigitQuestion } from "./twoDigitQuestionStrategy";
import { generateFourDigitQuestion } from "./fourDigitQuestionStrategy";

export function generateQuestion() {
    if (Math.random() <= 0.5) {
        return generateTwoDigitQuestion()
    } else {
        return generateFourDigitQuestion()
    }
}
