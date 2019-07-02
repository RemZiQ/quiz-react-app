import { connect } from 'react-redux';
import Question from './Question';


const mapStateToProps = (state) => {
  const currentQuestion = state.questions[state.questionNumber];
  const { questionNumber, answers, countOnAnswers } = state;

  const haveAnswer = answers[questionNumber] !== null
    && answers[questionNumber] !== undefined;

  const countOfQuestions = state.questions.length;
  const message = countOnAnswers === countOfQuestions ? 'Quiz ended. Now you can check your answers'
    : 'It was last question. Now go back, and answer on skiped questions';

  return (
    {
      lastQuestion: questionNumber >= countOfQuestions,
      haveAnswer,
      question: questionNumber > 4 ? null : currentQuestion.question,
      message,
    }
  );
};

export default connect(mapStateToProps, null)(Question);
