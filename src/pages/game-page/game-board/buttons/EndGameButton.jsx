import React from 'react';
import Button from '@mui/material/Button'

function EndGameButton({ onEndGame }){
    return <Button variant='contained' color='success' onClick={onEndGame}>End game</Button>
}

export default EndGameButton
