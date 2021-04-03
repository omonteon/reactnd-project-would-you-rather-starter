import Card from './Card';

function UserSummary({ user }) {
  return (<div className="user-summary">
  <img src={user.avatarURL} alt="User avatar" />
  <div className="questions-info">
    <h3>{user.name}</h3>
    <div>
      <span>Answered questions</span>: <b>{user.answeredQuestions}</b>
    </div>
    <div>
      <span>Created questions</span>: <b>{user.createdQuestions}</b>
    </div>
  </div>
  <Card title="Score" className="card-score">
    <div className="score">
      {user.score}

    </div>
  </Card>
</div>)
}

export default UserSummary;