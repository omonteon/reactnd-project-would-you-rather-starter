import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import Card from './Card';
import reactReduxLogo from '../assets/react-redux-logo.png';

class Login extends Component {
  state = {
    username: '',
    toPrivateRoute: ''
  }
  handleUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }
  handleSignIn = () => {
    const { username } = this.state;
    const { dispatch, location } = this.props;
    dispatch(setAuthedUser(username));
    localStorage.setItem('authedUser', username);
    if (location && location.state && location.state.from) {
      this.setState({ toPrivateRoute: location.state.from.pathname})
    } else {
      this.setState({ toPrivateRoute: '/' });
    }
  }
  render() {
    const { username, toPrivateRoute } = this.state;
    console.log(this.props);
    if (toPrivateRoute) {
      return <Redirect to={toPrivateRoute} />
    }
    return (<Card title="Welcome to the Would You Rather App!" className="card-login">
      <img src={reactReduxLogo} alt="app logo" />
      <h4>Sign in to continue</h4>
      <div className="login-form">
        <select value={username} onChange={this.handleUsernameChange  }>
          <option value="" disabled>Select your user</option>
          <option value="sarahedo">Sarah Edo</option>
          <option value="tylermcginnis">Tyler McGinnis</option>
          <option value="johndoe">John Doe</option>
        </select>
        <button onClick={this.handleSignIn} disabled={!username} className="btn btn-primary">Sign in</button>
      </div>
    </Card>)
  }
}

export default connect()(Login);