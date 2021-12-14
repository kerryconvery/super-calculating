import InputLabel from '@mui/material/InputLabel'
import Slider from '@mui/material/Slider'

function QuestionSelector({ onChange, defaultNumberOfQuestions }) {
    const onChangeTheNumberOfQuestions = (event) => {
        onChange(event.target.value)
    }

    return (
        <>
            <InputLabel id='question-selector'>Change the number of questions</InputLabel>
            <Slider
                aria-labelledby="question-selector"
                defaultValue={defaultNumberOfQuestions}
                valueLabelDisplay="on"
                onChange={onChangeTheNumberOfQuestions}
            />
        </>
    )
}

export default QuestionSelector
