import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../index';

describe('<Login/>', () => {
  let getByRole;

  beforeAll(() => {
    delete window.location;
    window.location = { assign: jest.fn() };
  });

  beforeEach(() => {
    const queries = render(<Login />);
    getByRole = queries.getByRole;
  });

  test('Should render login with google button', () => {
    expect(
      getByRole('button', { name: /Login With Google/g })
    ).toBeInTheDocument();
  });

  test('Should render login with github button', () => {
    expect(
      getByRole('button', { name: /Login With Github/g })
    ).toBeInTheDocument();
  });

  test('Should redirect to github consent screen upon clicking github login button', () => {
    userEvent.click(getByRole('button', { name: /Login With Github/g }));
    expect(window.location.assign).toHaveBeenCalledTimes(1);
    // Implement matching url with regex
  });

  // test('Should redirect to google consent screen upon clicking github login button', () => {
  // });
});
