import {useEffect} from "react";

function RotateBodyBackgroundColor({ interval, onNextColor }) {
    useEffect(() => {
        setRandomBackground()

        setInterval(() => {
            setRandomBackground()
        }, interval)
    }, [])

    const setRandomBackground = () => {
        document.body.style.backgroundColor = onNextColor()
    }

    return <></>
}

export default RotateBodyBackgroundColor
