import useBaseUrl from '@docusaurus/useBaseUrl';
import AnswerView from "./AnswerView"
import styles from './styles.module.css';

export default function QuestionView({
  questionDTO, index, totalQuestions
}) {
  const imageUrl = useBaseUrl(`/lid_images/${questionDTO.image_name}.png`)
  return (
    <article className={styles.questionCard}>
      <span className={styles.questionIndex}>{`${index} / ${totalQuestions}`}</span>
      <h3 className={styles.questionDe}>{questionDTO.question.de}</h3>
      <p className={styles.questionVi}>{questionDTO.question.vi}</p>
      {
        questionDTO.is_image ? (
          <div className={styles.questionImage}>
            <img src={imageUrl} alt={questionDTO.question.de} loading="lazy" />
          </div>
        ) : null
      }
      <ol className={styles.answers}>
        {
          questionDTO.options.map((answerDTO, i) => (
            <AnswerView
              key={answerDTO.no}
              label={String.fromCharCode(65 + i)}
              answerDTO={answerDTO}
              isCorrect={questionDTO.answer === answerDTO.no} />
          ))
        }
      </ol>
    </article>
  )
}
