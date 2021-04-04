import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading'
import PrivateRoute from './PrivateRoute';
import Nav from './Nav';
import Login from './Login';
import Home from './Home';
import Poll from './Poll';
import AddQuestion from './AddQuestion';
import Leaderboard from './Leaderboard';
import PageNotFound from './PageNotFound';
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
    const { authedUser } = this.props;
    return (
      <Router>
        <>
          <LoadingBar />
          {authedUser ? <Nav /> : null}
          <div className="container">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/404" component={PageNotFound} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/questions/:id" redirectPath="/404" component={Poll} />
              <PrivateRoute exact path="/add" component={AddQuestion} />
              <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
              <Route render={() => <Redirect to="/404" />} />
            </Switch>
            <div className="footer">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </div>
        </>
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
