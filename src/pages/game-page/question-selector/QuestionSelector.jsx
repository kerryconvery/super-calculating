import InputLabel from '@mui/material/InputLabel'
import Slider from '@mui/material/Slider'
import {useState} from "react";

function QuestionSelector({ hide, onChange, defaultNumberOfQuestions }) {
    const [numberOfQuestions, setNumberOfQuestions] = useState(defaultNumberOfQuestions)

    if (hide) {
        return <></>
    }

    const onChangeTheNumberOfQuestions = (event) => {
        setNumberOfQuestions(event.target.value)
        onChange(event.target.value)
    }

    return (
        <>
            <InputLabel id='question-selector'>{`Number of questions: ${numberOfQuestions}`}</InputLabel>
            <Slider
                aria-labelledby="question-selector"
                defaultValue={defaultNumberOfQuestions}
                valueLabelDisplay="off"
                onChange={onChangeTheNumberOfQuestions}
            />
        </>
    )
}

export default QuestionSelector
