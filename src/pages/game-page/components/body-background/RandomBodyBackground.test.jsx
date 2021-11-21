import { render } from "@testing-library/react"
import RandomBodyBackground from "./RandomBodyBackground";

jest.mock("../../../../utils/colorUtils", () => ({
    getRandomColor: () => 'red'
}))

describe('Body background', () => {
    it('sets the body background to a random color', () => {
        render(<RandomBodyBackground />)

        expect(document.body.style.backgroundColor).toEqual('red')
    })
})
