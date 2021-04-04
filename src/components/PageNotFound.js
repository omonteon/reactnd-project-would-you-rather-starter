import { Link } from 'react-router-dom';
import pageNotFoundImage from '../assets/404.svg';

function PageNotFound() {
  return (<div className="page-not-found">
    <img alt="Page not found" src={pageNotFoundImage} />
    <h1>Page not found</h1>
    <h2><Link to="/login">Sign in to continue</Link></h2>
  </div>);
}

export default PageNotFound