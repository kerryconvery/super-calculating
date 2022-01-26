import React from 'react';
import Image from "./Image";
import Audio from "../../Audio";

function WrongAnswer({ correctAnswer }) {
    return (
        <>
            <Image src='/oh-no.png' />
            <Audio src='/ohno.wav' />
            <div>Oh No!!</div>
            <div>{`The correct answer is ${correctAnswer}`}</div>
        </>
    )
}

export default WrongAnswer
