import { render } from "@testing-library/react"
import RotateBodyBackgroundColor from "./RotateBodyBackgroundColor";

describe('Body background', () => {
    it('sets the body background to a random color', () => {
        render(<RotateBodyBackgroundColor interval={0} onNextColor={() => 'red'} />)

        expect(document.body.style.backgroundColor).toEqual('red')
    })
})
