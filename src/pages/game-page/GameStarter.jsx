import {useState} from "react";
import IntervalButton from "./IntervalButton";
import QuestionCountSelector from "./question-count-selector/QuestionCountSelector";
import {styled} from "@mui/material/styles";

const Inline = styled('div')({
    display: 'inline',
})

const StartButton = styled(Inline)({
    marginLeft: '1rem'
})

function GameStarter({ text, defaultNumberOfQuestions, onChangeNumberOfQuestions, onCountDownCompleted }) {
    const [gameStarting, setGameStarting] = useState(false)

    return (
        <>
            <Inline>
                <QuestionCountSelector
                    hide={gameStarting}
                    defaultNumberOfQuestions={defaultNumberOfQuestions}
                    onChange={onChangeNumberOfQuestions}
                />
            </Inline>
            <StartButton>
                <IntervalButton
                    text={text}
                    onCountDownStarted={() => setGameStarting(true)}
                    onCountDownCompleted={onCountDownCompleted}
                />
            </StartButton>
        </>
    )
}

export default GameStarter
