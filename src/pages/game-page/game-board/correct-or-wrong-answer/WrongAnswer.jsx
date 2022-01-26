import Image from "./Image";
import Audio from "../../Audio";

function WrongAnswer({ correctAnswer }) {
    return (
        <>
            <Image src='assets/oh-no.png' />
            <Audio src='assets/ohno.wav' />
            <div>Oh No!!</div>
            <div>{`The correct answer is ${correctAnswer}`}</div>
        </>
    )
}

export default WrongAnswer
