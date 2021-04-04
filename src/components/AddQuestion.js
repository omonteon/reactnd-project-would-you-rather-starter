import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleSaveQuestion } from '../actions/questions';
import Card from './Card';

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }
  handleOptionTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmitQuestion = () => {
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, authedUser } = this.props;
    dispatch(handleSaveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }, this.redirectToHome));

    
  }
  redirectToHome = () => this.setState({ toHome: true });
  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;
    if (toHome === true) {
      return <Redirect to='/' />
    }
    return (<Card title="Create New Question" className="card-new-question">
      <span>Complete the question:</span>
      <div className="add-question-form">
        <h4>Would you rather...</h4>
        <input
          type="text"
          placeholder="Enter option 1 text here"
          name="optionOneText"
          value={optionOneText}
          onChange={this.handleOptionTextChange}
        />
        <span>OR</span>
        <input
          type="text"
          placeholder="Enter option 2 text here"
          name="optionTwoText"
          value={optionTwoText}
          onChange={this.handleOptionTextChange}
        />
        <button
          type="button"
          onClick={this.handleSubmitQuestion}
          className="btn btn-primary"
          disabled={optionOneText === '' || optionTwoText === ''}
        >
          Submit
          </button>
      </div>
    </Card>)
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(AddQuestion);