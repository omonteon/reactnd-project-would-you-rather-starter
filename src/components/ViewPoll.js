import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Card({ title, children }) {
  return <div className="card">
    <div className="card-title">
      {title}
    </div>
    <div className="card-content">
      {children}
    </div>
  </div>;
}

class ViewPoll extends Component {
  render() {
    const { question, author } = this.props;
    return <Card title={`${author.name} asks:`}>
      <div className="view-poll">
        <img src={author.avatarURL} alt="User avatar" />
        <div className="view-poll-extract">
          <h4>Would you rather ?</h4>
          <p>...{question.optionOne.text}...</p>
          <Link to={`/poll/${question.id}`}>
            <button type="button">View Poll</button>
          </Link>
        </div>
      </div>
    </Card>
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const author = users[question.author];
  return {
    question,
    author
  }
}

export default connect(mapStateToProps)(ViewPoll);