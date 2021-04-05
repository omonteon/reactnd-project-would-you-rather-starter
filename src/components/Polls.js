import { Component } from "react";
import { connect } from 'react-redux';
import ViewPoll from './ViewPoll';

class Polls extends Component {
  render() {
    const { questions } = this.props;
    return <div className="polls-list">
      {questions.length > 0 ? questions.map(questionId => {
        return <ViewPoll id={questionId} key={questionId} />
      }) : 'There are no more questions...'}
    </div>;
  }
}

function mapStateToProps({ authedUser, users, questions }, { answered }) {
  const currentUser = users[authedUser] || { answers: [] };
  const byTimestamp = (a, b) => questions[b].timestamp - questions[a].timestamp;
  return {
    questions: answered
      ? Object.keys(currentUser.answers)
        .sort(byTimestamp)
      : Object.keys(questions)
        .filter(id => Object.keys(currentUser.answers).every(aId => aId !== id))
        .sort(byTimestamp)
  };
}

export default connect(mapStateToProps)(Polls);