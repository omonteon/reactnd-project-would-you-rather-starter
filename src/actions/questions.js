
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function answerQuestion({ id, authedUser, selectedOption }) {
  return {
    type: ANSWER_QUESTION,
    id,
    authedUser,
    selectedOption
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
