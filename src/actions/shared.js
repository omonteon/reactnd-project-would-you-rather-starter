import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';
import { receiveQuestions } from '../actions/questions';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData() {
  const authedUser = localStorage.getItem('authedUser');
  return (dispatch) => {
    dispatch(setAuthedUser(authedUser));
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      })
  }
}