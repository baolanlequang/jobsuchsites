import AnswerView from "./AnswerView"

export default function QuestionView({
  questionDTO, totalQuestions
}) {
  return (
    <div className='card' key={questionDTO.id}>
      <div className='card__header'>
        <strong>
          {
            `${questionDTO.id}/${totalQuestions}`
          }
        </strong>
        <h4>{questionDTO.question.de}</h4>
        <h5><i>{questionDTO.question.vi}</i></h5>
      </div>
      <div className='card__body'>
      {
        questionDTO.is_image ? (
          <div className="card__image">
            <img src={`../lid_images/${questionDTO.image_name}.png`} width={400} /> 
          </div>
        ) : null
      }
      <ul style={{listStyleType: 'none'}}>
        {
          questionDTO.options.map((answerDTO) => (
            <AnswerView questionDTO={questionDTO} answerDTO={answerDTO} />
          ))
        }
      </ul>
      </div>
    </div>
  )
}