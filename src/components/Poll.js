import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';

class Poll extends Component {
  state = {
    selectedOption: 'optionOne'
  }
  handleSetSelectedOption = (e) => {
    this.setState({ selectedOption: e.target.value });
  }
  render() {
    const { selectedOption } = this.state;
    const { question, author, authedUser, answered } = this.props;
    if (!authedUser) {
      return 'Loading...'
    }
    return <Card title={`${author.name} asks:`} className="poll-card">
      <div className="poll">
        <img src={author.avatarURL} alt="User avatar" />
        {answered
          ? null
          : <div className="poll-questions">
            <h3>Would you rather ?</h3>
            <div className="question">
              <input
                type="radio"
                id="optionOne"
                name="poll"
                value="optionOne"
                checked={selectedOption === 'optionOne'}
                onChange={this.handleSetSelectedOption}
              />
              <label htmlFor="optionOne">{question.optionOne.text}</label>
            </div>
            <div className="question">
              <input
                type="radio"
                id="optionTwo"
                name="poll"
                value="optionTwo"
                checked={selectedOption === 'optionTwo'}
                onChange={this.handleSetSelectedOption}
              />
              <label htmlFor="optionTwo">{question.optionTwo.text}</label>
            </div>
            <Link to={`/poll/${question.id}`}>
              <button type="button" className="btn btn-primary">Submit</button>
            </Link>
          </div>}
      </div>
    </Card>
  }
}

function mapStateToProps({ questions, users, authedUser: authedUserId }, props) {
  const { id } = props.match.params
  const authedUser = users[authedUserId];
  const question = questions[id];
  const author = question && question.author ? users[question.author] : {};
  const answered = authedUser && authedUser.questions && authedUser.questions[id];
  return {
    question,
    author,
    authedUser,
    answered
  }
}

export default connect(mapStateToProps)(Poll);