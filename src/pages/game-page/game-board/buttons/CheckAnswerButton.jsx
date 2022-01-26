import React from 'react';
import Button from "@mui/material/Button";

function CheckAnswerButton({ onClick }) {
    return <Button variant='contained' color="success" onClick={onClick}>Check Answer</Button>
}

export default CheckAnswerButton
