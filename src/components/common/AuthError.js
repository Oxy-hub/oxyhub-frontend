import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <>
    <h1>Some Error Occured</h1>
    Go Back to<Link to="/"> Home </Link>and try again
  </>
);

export default ErrorPage;
