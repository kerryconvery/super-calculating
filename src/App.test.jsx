import { render, screen } from '@testing-library/react'
import App from './App';

describe('When the app is running', () => {
    it('displays the title', () => {
        render(<App />)

        expect(screen.getByText('Super Calculating')).toBeInTheDocument()
    })

    it('display the game page', () => {
        render(<App />)

        expect(screen.getByText('Start')).toBeInTheDocument()
    })
})
