
import { saveQuestionAnswer, saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function handleSaveQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(answerQuestion(info))

    return saveQuestionAnswer(info)
      .then(() => dispatch(hideLoading()));
  }
}


function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleSaveQuestion(info, cb) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion(info)
      .then((question) => {
        dispatch(addQuestion(question));
        cb();
        dispatch(hideLoading());
      });
  }
}


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
