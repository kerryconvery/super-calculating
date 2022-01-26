import ValidationError from "./ValidationError";

function MissingAnswerError({ show }) {
  return <ValidationError show={show}>Please enter an answer first</ValidationError>
}

export default MissingAnswerError
