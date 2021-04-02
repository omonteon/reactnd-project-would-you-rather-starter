import { Component } from 'react';
import { connect } from 'react-redux';

function Card({ title, children }) {
  return <div className="card">
    <div className="card-title">
      {title}
    </div>
    {children}
  </div>;
}

class ViewPoll extends Component {
  render() {
    const { question, author } = this.props;
    return <Card title={`${author.name} asks:`}>
      <img src={author.avatarURL} alt="User avatar" />
      <h5>Would you rather ?</h5>
      <p>...{question.optionOne.text}...</p>
      <button type="button">View Poll</button>
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