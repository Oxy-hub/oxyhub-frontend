import { Helmet } from 'react-helmet';
import Login from '../components/Login';

const LoginPage = hello => (
  <>
    <Helmet title="Welcome! - Oxyhub" hello={hello} />
    <Login />
  </>
);

export default LoginPage;
