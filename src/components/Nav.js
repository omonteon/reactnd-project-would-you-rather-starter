import { Component } from 'react'
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { NavLink, Link } from 'react-router-dom'

class Nav extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    localStorage.removeItem('authedUser');
    dispatch(setAuthedUser(null))
  }
  render() {
    const { authedUserName, authedUserAvatarURL } = this.props;
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
        </ul>
        <div className={`auth-info ${authedUserName ? '' : 'hide'}`}>
          Hello, {authedUserName} <img src={authedUserAvatarURL} alt="User avatar" />
          <Link to='/login' onClick={this.handleLogout}>
            <span>Logout</span>
          </Link>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUserName: users[authedUser] ? users[authedUser].name : '',
    authedUserAvatarURL: users[authedUser] ? users[authedUser].avatarURL : ''
  }
}

export default connect(mapStateToProps)(Nav)
