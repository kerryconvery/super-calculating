import {useEffect} from "react";
import { getRandomColor } from "../../../../utils/colorUtils";

function RandomBodyBackground() {
    useEffect(() => {
        setRandomBackground()

        setInterval(() => {
            setRandomBackground()
        }, 2000)
    }, [])

    const setRandomBackground = () => {
        document.body.style.backgroundColor = getRandomColor()
    }

    return <></>
}

export default RandomBodyBackground
