export default function AnswerView({questionDTO, answerDTO}) {
  return (
    <li key={answerDTO.no}>
      <span>
        <span>{`${answerDTO.no}. `}</span>
        {answerDTO.de}
      {
        questionDTO.answer === answerDTO.no ? (
          <input type='checkbox' checked={true} className="input input--primary" />
        ) : null
      }
      </span>
      <p><i>{answerDTO.vi}</i></p>
    </li>
  )
}