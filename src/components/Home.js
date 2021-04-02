import { Component } from "react";
import Polls from './Polls';

class Home extends Component {
  state = {
    answered: false
  }
  handleSetAnswered(answered) {
    this.setState({ answered });
  }
  render() {
    const { answered } = this.state;
    return (<div className="polls">
      <div className="polls-header">
        <button type="button" onClick={() => this.handleSetAnswered(false)}>Unanswered questions</button>
        <button type="button" onClick={() => this.handleSetAnswered(true)}>Answered questions</button>
      </div>
      <Polls answered={answered} />
    </div>);
  }
}

export default Home;