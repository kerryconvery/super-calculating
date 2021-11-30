import { render, screen } from '@testing-library/react'
import App from './App';

jest.mock('./utils/colorUtils', () => ({
    getRandomColor: () => 'blue'
}))

describe('When the app is running', () => {
    it('displays the title', () => {
        render(<App />)

        expect(screen.getByText('Super Calculating')).toBeInTheDocument()
    })

    it('display the game page', () => {
        render(<App />)

        expect(screen.getByText('Start')).toBeInTheDocument()
    })

    it('sets the background color to a random color', () => {
        render(<App />)

        expect(document.body.style.backgroundColor).toEqual('blue')
    })
})
