import Image from "./Image";
import Audio from "../../Audio";

function CorrectAnswer() {
    return (
        <>
            <Image src='assets/correct.png' />
            <Audio src='assets/applause3.wav' />
            <div>Correct!!</div>
        </>
    )
}

export default CorrectAnswer
