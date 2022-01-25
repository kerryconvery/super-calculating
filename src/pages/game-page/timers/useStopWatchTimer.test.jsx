import {act, renderHook} from "@testing-library/react-hooks";
import useStopWatchTimer from './useStopWatchTimer'
import {waitFor} from "@testing-library/react";

jest.useFakeTimers()

describe('useStopWatchTimer', () => {
    it('starts from zero seconds', () => {
        const { result } = renderHook(useStopWatchTimer)

        expect(result.current.elapsedSeconds).toEqual(0)
    })

    it('does not start the timer immediately', () => {
        const { result } = renderHook(useStopWatchTimer)

        act(() => {
            jest.advanceTimersByTime(1000)
        })

        expect(result.current.elapsedSeconds).toEqual(0)
    })

    it('can resume the timer', () => {
        const { result } = renderHook(useStopWatchTimer)

        act(() => {
            result.current.resumeTimer()
            jest.advanceTimersByTime(3000)
        })

        expect(result.current.elapsedSeconds).toEqual(3)
    })

    it('can pause the timer after it has been started', () => {
        const { result } = renderHook(useStopWatchTimer)

        act(() => {
            result.current.resumeTimer()
            jest.advanceTimersByTime(1000)
        })

        act(() => {
            result.current.pauseTimer()
            jest.advanceTimersByTime(1000)
        })

        expect(result.current.elapsedSeconds).toEqual(1)
    })
})
