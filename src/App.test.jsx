import {render, screen, waitFor} from '@testing-library/react'
import App from './App';

jest.mock('./utils/colorUtils', () => ({
    getRandomColor: () => 'blue'
}))

describe('When the app is running', () => {
    beforeAll(() => {
        global.Storage.prototype.setItem = jest.fn()
        global.Storage.prototype.getItem = jest.fn()
    })

    beforeEach(async () => {
        await renderApp()
    })

    it('displays the title', async () => {
        expect(screen.getByText('Super Calculating')).toBeInTheDocument()
    })

    it('display the game page', async () => {
        expect(screen.getByText('Start')).toBeInTheDocument()
    })

    it('sets the background color to a random color', async () => {
        expect(document.body.style.backgroundColor).toEqual('blue')
    })

    function renderApp() {
        return waitFor(() => {
            render(<App/>)
        })
    }
})
