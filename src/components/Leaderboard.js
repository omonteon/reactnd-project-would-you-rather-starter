import { Component } from 'react';
import { connect } from 'react-redux';
import UserSummary from './UserSummary';

class Leaderboard extends Component {
  render() {
    const { users } = this.props;
    return (<div className="leaderboard">
      {users.map(user => {
        return <UserSummary user={user} />;
      })}
    </div>)
  }
}

function mapStateToProps({ users }) {
  const byScore = (userA, userB) => {
    const scoreA = userA.answeredQuestions + userA.createdQuestions;
    const scoreB = userB.answeredQuestions + userB.createdQuestions;
    return scoreB - scoreA;
  }
  return {
    users: Object.keys(users)
      .map(userId => {
        const user = users[userId];
        return {
          ...user,
          answeredQuestions: Object.keys(user.answers).length,
          createdQuestions: user.questions.length,
          score: Object.keys(user.answers).length + user.questions.length
        }
      }) // CODE REVIEW QUESTION: Is it ok to do this? OR should I pass the array of ids and get the user inside the component that needs it ?
      .sort(byScore)
  }
}

export default connect(mapStateToProps)(Leaderboard);