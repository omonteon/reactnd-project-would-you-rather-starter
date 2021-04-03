
import { saveQuestionAnswer } from '../utils/api';

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
    dispatch(answerQuestion(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleSaveQuestionAnswer: ', e)
        // TODO: Implement "undo" action
        // dispatch(answerQuestion(info))
        alert('The was an error saving your answer. Try again.')
      })
  }
}


export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
