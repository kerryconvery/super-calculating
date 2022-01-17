import {fireEvent, render, screen} from "@testing-library/react";
import QuestionCountSelector from "./QuestionCountSelector";

jest.mock('@mui/material/Slider', () => (props) => {
    const { id, name, min, max, defaultValue, onChange } = props;
    return (
        <input
            aria-labelledby={props['aria-labelledby']}
            type="range"
            id={id}
            name={name}
            min={min}
            max={max}
            value={defaultValue}
            onChange={onChange}
        />
    );
});

describe('Question selector', () => {
    it('displays the default number of questions to ask', () => {
        render(<QuestionCountSelector defaultNumberOfQuestions={5} />)

        expect(screen.getByText('Number of questions: 5')).toBeInTheDocument()
    })

    it('displays the new number of questions to ask', () => {
        render(<QuestionCountSelector defaultNumberOfQuestions={5} onChange={() => {}} />)

        fireEvent.change( screen.getByLabelText(/Number of questions:/), { target: { value: 2 } })

        expect(screen.getByText('Number of questions: 2')).toBeInTheDocument()
    })
})
