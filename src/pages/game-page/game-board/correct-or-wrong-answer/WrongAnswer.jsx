import Image from "./Image";

function WrongAnswer({ correctAnswer }) {
    return (
        <>
            <Image src='assets/oh-no.png' />
            <div>Oh No!!</div>
            <div>{`The correct answer is ${correctAnswer}`}</div>
        </>
    )
}

export default WrongAnswer