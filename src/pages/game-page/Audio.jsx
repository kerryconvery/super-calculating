const {useEffect} = require("react");

function Audio({ id, src, volume }) {
    useEffect(() => {
        if (volume) {
            const audio = document.getElementById(id);
            audio.volume = volume;
        }
    }, [])

    return <audio id={id} src={src} autoPlay />
}

export default Audio
