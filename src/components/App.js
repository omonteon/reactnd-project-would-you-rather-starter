import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Home from './Home';
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <div className="App">
          {/* NAV */}
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          {/* /poll/:id */}
          {/* /leaderboard */}
          {/* /new */}
          <div className="footer">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
      </Router>
    );
  }
}

export default connect()(App)
