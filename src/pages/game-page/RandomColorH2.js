import {getRandomColor} from "../../utils/colorUtils";

function RandomColorH2({ children }) {
    return <h2 style={{ color: getRandomColor() }}>{children}</h2>
}

export default RandomColorH2
