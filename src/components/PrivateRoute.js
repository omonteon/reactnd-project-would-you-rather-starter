// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
// CODE TAKEN FROM: https://stackoverflow.com/questions/47476186/when-user-is-not-logged-in-redirect-to-login-reactjs
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ authedUser, redirectPath, component: Component, ...rest }) => {
  const isLoggedIn = authedUser !== null;
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: redirectPath || '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(PrivateRoute);