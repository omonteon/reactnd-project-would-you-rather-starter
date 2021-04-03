import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import Card from './Card';
import reactReduxLogo from '../assets/react-redux-logo.png';

class Login extends Component {
  state = {
    username: '',
    toHome: false
  }
  handleUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }
  handleSignIn = () => {
    const { username } = this.state;
    const { dispatch } = this.props;
    dispatch(setAuthedUser(username));
    this.setState({ toHome: true });
  }
  render() {
    const { username, toHome } = this.state;
    if (toHome === true) {
      return <Redirect to='/' />
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