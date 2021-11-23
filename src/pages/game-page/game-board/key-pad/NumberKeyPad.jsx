import KeyPad from "./KeyPad";

function NumberKeyPad({ onKeyPressed }) {
    return <KeyPad keys={['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']} onKeyPressed={onKeyPressed} />
}

export default NumberKeyPad
