import snapshot from 'react-test-renderer';
import LoginPage from '../LoginPage';

test('Snapshot test for the login page', () => {
  const componentSnapshot = snapshot.create(<LoginPage />).toJSON();
  expect(componentSnapshot).toMatchSnapshot();
});
