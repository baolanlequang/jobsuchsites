import clsx from 'clsx';
import styles from './styles.module.css';

export default function AnswerView({label, answerDTO, isCorrect}) {
  return (
    <li className={clsx(styles.answer, isCorrect && styles.answerCorrect)}>
      <span className={styles.answerLabel}>{isCorrect ? '✓' : label}</span>
      <div>
        <span className={styles.answerDe}>{answerDTO.de}</span>
        <span className={styles.answerVi}>{answerDTO.vi}</span>
      </div>
    </li>
  )
}
