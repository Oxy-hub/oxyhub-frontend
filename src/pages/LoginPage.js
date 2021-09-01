import { Helmet } from 'react-helmet';
import Login from '../components/Login';

const LoginPage = hello => (
  <>
    <Helmet title="Welcome! - Oxyhub" hello={hello} />
    <h1>Hello</h1>
    <Login />
  </>
);

export default LoginPage;
