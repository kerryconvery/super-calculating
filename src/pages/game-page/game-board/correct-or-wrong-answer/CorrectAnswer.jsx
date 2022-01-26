import React from 'react';
import Image from "./Image";
import Audio from "../../Audio";

function CorrectAnswer() {
    return (
        <>
            <Image src='/correct.png' />
            <Audio src='/applause3.wav' />
            <div>Correct!!</div>
        </>
    )
}

export default CorrectAnswer
