import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      const { question } = action
      return {
        ...state,
        [question.id]: question,
      }
    case ANSWER_QUESTION:
      // TODO: Refactor double squarebrackets
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.selectedOption]: {
            ...state[action.id][action.selectedOption],
            votes: state[action.id][action.selectedOption].votes.concat(action.authedUser)
          }
            
        }
      }
    default:
      return state
  }
}