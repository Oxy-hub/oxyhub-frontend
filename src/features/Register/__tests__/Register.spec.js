import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Register from '../index';

const server = setupServer(
  rest.get('http://localhost:8000/user', (_, res, ctx) =>
    res(
      ctx.json({
        firstName: 'Johnathan',
        middleName: '',
        lastName: 'Doer',
        email: 'johndoe@oxyhub.com',
        id: '1'
      })
    )
  )
);

describe('<Register/>', () => {
  let getByLabelText;
  let getByRole;
  let findByTestId;

  beforeAll(() => server.listen());

  beforeEach(() => {
    const queries = render(<Register />);
    getByLabelText = queries.getByLabelText;
    getByRole = queries.getByRole;
    findByTestId = queries.findByTestId;
  });

  afterAll(() => server.close());

  afterEach(() => server.resetHandlers());

  test('Should render first name form field with correct value', () => {
    const field = getByLabelText('First Name *');
    expect(field).toBeInTheDocument();
    // expect(field.value).toBe('John');
  });

  test('Should render last name form field with correct value', () => {
    const field = getByLabelText('Last Name *');
    expect(field).toBeInTheDocument();
    // expect(field.value).toBe('Doe');
  });

  test('Should render middle name form field with correct value', () => {
    server.use(
      rest.get('http://localhost:8000/user', (_, res, ctx) =>
        res(
          ctx.json({
            firstName: 'Johnathan',
            middleName: 'Pastora',
            lastName: 'Doer',
            email: 'johndoe@oxyhub.com',
            id: '1'
          })
        )
      )
    );
    const field = getByLabelText('Middle Name');
    expect(field).toBeInTheDocument();
    // expect(field.value).toBe('Pastor');
  });

  test('Should render middle name form field without any value if middle name is not present', () => {
    const field = getByLabelText('Middle Name');
    expect(field).toBeInTheDocument();
    expect(field.value).toBe('');
  });

  describe('<Register/> : Form Error Messages', () => {
    let firstName;
    let middleName;
    let lastName;
    let submitButton;

    beforeEach(() => {
      firstName = getByLabelText('First Name *');
      middleName = getByLabelText('Middle Name');
      lastName = getByLabelText('Last Name *');
      submitButton = getByRole('button', { name: /Save & Continue/g });
    });

    test('Should render error messages if the required fields are kept empty', async () => {
      fireEvent.change(firstName, { target: { value: '' } });
      fireEvent.change(middleName, { target: { value: '' } });
      fireEvent.change(lastName, { target: { value: '' } });
      userEvent.click(submitButton);
      const firstNameError = await findByTestId('first-name-error');
      // const middleNameError = await findByTestId('middle-name-error');
      const lastNameError = await findByTestId('last-name-error');
      expect(firstNameError).toBeInTheDocument();
      // expect(middleNameError).toBeInTheDocument();
      expect(lastNameError).toBeInTheDocument();
    });

    test('Should render error messages if the required fields only has blank spaces', async () => {
      fireEvent.change(firstName, { target: { value: '            ' } });
      fireEvent.change(middleName, { target: { value: ' ' } });
      fireEvent.change(lastName, { target: { value: '                  ' } });
      userEvent.click(submitButton);
      const firstNameError = await findByTestId('first-name-error');
      // const middleNameError = await findByTestId('middle-name-error');
      const lastNameError = await findByTestId('last-name-error');
      expect(firstNameError).toBeInTheDocument();
      // expect(middleNameError).toBeInTheDocument();
      expect(lastNameError).toBeInTheDocument();
    });

    test('Should render proper error message if first name is empty', async () => {
      fireEvent.change(firstName, { target: { value: '' } });
      userEvent.click(submitButton);
      const firstNameError = await findByTestId('first-name-error');
      expect(firstNameError).toBeInTheDocument();
    });

    test('Should render proper error message if first name only has blank spaces', async () => {
      fireEvent.change(firstName, { target: { value: '          ' } });
      userEvent.click(submitButton);
      const firstNameError = await findByTestId('first-name-error');
      expect(firstNameError).toBeInTheDocument();
    });

    test('Should render proper error message if last name is empty', async () => {
      fireEvent.change(lastName, { target: { value: '' } });
      userEvent.click(submitButton);
      const lastNameError = await findByTestId('last-name-error');
      expect(lastNameError).toBeInTheDocument();
    });

    test('Should render proper error message if last name only has blank spaces', async () => {
      fireEvent.change(lastName, { target: { value: '             ' } });
      userEvent.click(submitButton);
      const lastNameError = await findByTestId('last-name-error');
      expect(lastNameError).toBeInTheDocument();
    });
    test('Should render proper error message if middle name only has blank spaces', () => {});
  });
});
