import {useEffect} from "react";
import {getRandomColor} from "../../../utils/colorUtils";

function useRandomBackgroundColor(interval) {
    useRotateBodyBackgroundColor(interval, getRandomColor)
}

function useRotateBodyBackgroundColor(interval, onNextColor) {
    useIntervalTimer(interval, setRandomBackground)

    function setRandomBackground() {
        document.body.style.backgroundColor = onNextColor()
    }
}

function useIntervalTimer(interval, onInterval) {
    useEffect(() => {
        onInterval()

        setInterval(() => {
            onInterval()
        }, interval)
    }, [])
}

export default useRandomBackgroundColor
