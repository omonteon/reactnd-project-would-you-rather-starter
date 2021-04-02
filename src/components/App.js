import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Home from './Home';

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
        </div>
      </Router>
    );
  }
}

export default connect()(App)
