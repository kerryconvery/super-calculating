import React from 'react';

function ValidationError(props) {
    if (props.show) {
        return (props.children)
    }
    return <></>
}

export default ValidationError
