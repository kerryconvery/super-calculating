import { render, screen } from '@testing-library/react'
import KeyPad from "./KeyPad";
import userEvent from "@testing-library/user-event";

describe('Number pad', () => {
    const keys = ['1', '2']

    it.each(keys)('triggers an event with key %s', (key) => {
        const onKeyPressed = jest.fn()

        render(<KeyPad keys={keys} onKeyPressed={onKeyPressed} />)

        pressKey(key)

        expect(onKeyPressed).toHaveBeenCalledWith(key)
    })
})

function pressKey(key) {
    userEvent.click(screen.getByText(key))
}
