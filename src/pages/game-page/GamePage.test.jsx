import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GamePage from './GamePage'

jest.useFakeTimers()

describe('When playing the game', () => {
    it('displays a start button', () => {
        const { startButton } = renderGamePage()

        expect(startButton).toBeInTheDocument()
    })

    describe('when the start button is pressed', () => {
        it('Counts down from 3', async () => {
            const { startButton } = renderGamePage()

            userEvent.click(startButton)

            expect(screen.getByText('3')).toBeInTheDocument()
        })

        it('Counts down from 3 to 2', async() => {
            const { startButton } = renderGamePage()

            userEvent.click(startButton)

            await  waitFor(() => {
                jest.advanceTimersByTime(1000);
            })

            expect(screen.getByText('2')).toBeInTheDocument()
        })

        it('Counts down from 2 to 1', async () => {
            const { startButton } = renderGamePage()

            userEvent.click(startButton)

            await  waitFor(() => {
                jest.advanceTimersByTime(2000);
            })

            expect(screen.getByText('1')).toBeInTheDocument()
        })

        it('Counts down from 1 to START', async () => {
            const { startButton } = renderGamePage()

            userEvent.click(startButton)

            await  waitFor(() => {
                jest.advanceTimersByTime(3000);
            })

            expect(screen.getByText('GO!')).toBeInTheDocument()
        })

        it('displays a mathematics question when the count down reaches zero', async () => {
            const { startButton } = renderGamePage()

            userEvent.click(startButton)

            await  waitFor(() => {
                jest.advanceTimersByTime(4000);
            })

            expect(screen.getByText('2 + 3 =')).toBeInTheDocument()
        })
    })
})

function renderGamePage() {
    render(<GamePage />)

    return {
        startButton: screen.getByText('Start')
    }
}

