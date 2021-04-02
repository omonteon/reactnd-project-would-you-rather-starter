import { Component } from "react";
import { connect } from 'react-redux';
import ViewPoll from './ViewPoll';

class Polls extends Component {
  state = {
    answered: false
  }
  handleSetQuestionsType(answered) {
    this.setState({ answered });
  }
  render() {
    const { answered } = this.state;
    const { unansweredQuestionsIds, answeredQuestionsIds } = this.props;
    const questions = answered ? answeredQuestionsIds : unansweredQuestionsIds;
    return <div className="polls">
      <div className="polls-header">
        <button type="button" onClick={() => this.handleSetQuestionsType(false)}>Unanswered questions</button>
        <button type="button" onClick={() => this.handleSetQuestionsType(true)}>Answered questions</button>
      </div>
      {questions.map(questionId => {
        return <ViewPoll id={questionId} answered={answered} key={questionId} />
      })}
    </div>;
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const currentUser = users[authedUser] || { answers: {} }; // TODO: Refactor this
  const answeredQuestionsIds = Object.keys(currentUser.answers)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  const unansweredQuestionsIds = Object.keys(questions)
    .filter(id => answeredQuestionsIds.every(aId => aId !== id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  return {
    authedUser: currentUser,
    answeredQuestionsIds,
    unansweredQuestionsIds
  };
}

export default connect(mapStateToProps)(Polls);