import pageNotFoundImage from '../assets/404.svg';

function PageNotFound() {
  return (<div className="page-not-found">
    <img alt="Page not found" src={pageNotFoundImage} />
    <h1>Poll not found</h1>
  </div>);
}

export default PageNotFound