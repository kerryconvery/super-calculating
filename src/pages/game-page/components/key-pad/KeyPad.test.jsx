import { render } from '@testing-library/react'
import KeyPad from "./KeyPad";

describe('Number pad', () => {
    it('triggers an event with the number 1', () => {
        const onKeyPressed = jest.fn()

        render(<KeyPad />)

        expect(onKeyPressed).toHaveBeenCalledWith('1')
    })
})
