import Image from "./Image";

function CorrectAnswer() {
    return (
        <>
            <Image src='assets/correct.png' />
            <audio src='assets/applause3.wav' autoPlay />
            <div>Correct!!</div>
        </>
    )
}

export default CorrectAnswer
