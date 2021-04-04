import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import Login from './Login';
import Home from './Home';
import Poll from './Poll';
import AddQuestion from './AddQuestion';
import Leaderboard from './Leaderboard';
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch, authedUser } = this.props;
    if (authedUser) {
      dispatch(handleInitialData());
    }
  }
  componentDidUpdate(prevProps) {
    const { dispatch, authedUser } = this.props;
    if (!prevProps.authedUser && authedUser) {
      dispatch(handleInitialData()); 
    }
  }
  render() {
    const { authedUserName } = this.props;
    return (
      <Router>
        <div className="App">
          <Nav authedUserName={authedUserName} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/questions/:id" component={Poll} />
          <Route exact path="/add" component={AddQuestion} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <div className="footer">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
