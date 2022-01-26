import React from 'react';
import Button from "@mui/material/Button";

function NextButton({ onNext }){
    return <Button variant='contained' color='success' onClick={onNext}>Next question</Button>
}

export default NextButton
