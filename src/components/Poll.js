import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleSaveQuestionAnswer } from '../actions/questions';
import Card from './Card';
import PollResults from './PollResults';

class Poll extends Component {
  state = {
    selectedOption: 'optionOne'
  }
  handleSetSelectedOption = (e) => {
    this.setState({ selectedOption: e.target.value });
  }
  handleSubmitQuestionAnswer = () => {
    const { selectedOption } = this.state;
    const { dispatch, authedUser, match } = this.props;
    const { id } = match.params;
    dispatch(handleSaveQuestionAnswer({
      qid: id,
      authedUser: authedUser.id,
      answer: selectedOption
    }))
  }
  render() {
    const { selectedOption } = this.state;
    const { question, author, authedUser, answered } = this.props;
    if (authedUser && !question) {
      return <Redirect to='/404' />
    }
    if (!question) {
      return <h2>Loading...</h2>;
    }
    return <Card title={`${author.name} asks:`} className="poll-card">
      <div className="poll">
        <img src={author.avatarURL} alt="User avatar" />
        {answered
          ? <PollResults question={question} authedUserId={authedUser.id} />
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
            <button type="button" className="btn btn-primary" onClick={this.handleSubmitQuestionAnswer}>Submit</button>
          </div>}
      </div>
    </Card>
  }
}

function mapStateToProps({ questions, users, authedUser: authedUserId }, props) {
  const { id } = props.match.params;
  const authedUser = users[authedUserId];
  const question = questions[id];
  const author = question && question.author ? users[question.author] : '';
  const answered = authedUser && authedUser.answers && authedUser.answers[id];
  return {
    question,
    author,
    authedUser,
    answered
  }
}

export default connect(mapStateToProps)(Poll);