import { render } from "@testing-library/react"
import RotateBodyBackgroundColor from "./useRandomBodyBackgroundColor";
import * as ColorUtils from '../../../utils/colorUtils'
import {renderHook} from "@testing-library/react-hooks";
import useRandomBodyBackgroundColor from "./useRandomBodyBackgroundColor";

describe('Use random Body background', () => {
    it('sets the body background to a random color', () => {
        jest.spyOn(ColorUtils, 'getRandomColor').mockReturnValue('red')

        renderHook(() => useRandomBodyBackgroundColor(1))

        expect(document.body.style.backgroundColor).toEqual('red')
    })
})
