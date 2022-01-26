import React from 'react';
import Button from "@mui/material/Button";

function ClearButton({ onClick }) {
    return <Button variant='contained' color="secondary" onClick={onClick}>Clear</Button>
}

export default ClearButton
