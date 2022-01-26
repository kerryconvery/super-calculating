import React from 'react';
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";

const FlexContainer = styled('div')({
    display: 'flex',
    gap: '10px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
})

const SquareKey = styled(Button)({
    minWidth: 0,
    width: '50px',
    height: '50px'
})

function Keys({ keys, onKeyPressed }) {
    return keys.map((key, index) => (
        <SquareKey
            variant='contained'
            key={index}
            onClick={() => onKeyPressed(key)}
        >
            {key}
        </SquareKey>
    ))
}

function KeyPad({ keys, onKeyPressed }) {
    return (
        <FlexContainer>
            <Keys keys={keys} onKeyPressed={onKeyPressed} />
        </FlexContainer>
    )
}

export default KeyPad
