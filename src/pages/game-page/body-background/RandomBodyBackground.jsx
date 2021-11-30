import {useEffect} from "react";

function RandomBodyBackground({ getRandomColor }) {
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
