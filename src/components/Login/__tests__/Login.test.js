import { render } from '@testing-library/react';
import Login from '../index';

describe('<Login/>', () => {
  let getByRole;
  beforeEach(() => {
    const queries = render(<Login />);
    getByRole = queries.getByRole;
  });

  test('Should render login with google button', () => {
    expect(
      getByRole('button', { name: 'Login With Google' })
    ).toBeInTheDocument();
  });

  test('Should render login with github button', () => {
    expect(
      getByRole('button', { name: 'Login With Github' })
    ).toBeInTheDocument();
  });
});
