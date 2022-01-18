const Question = {
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

export default Question
