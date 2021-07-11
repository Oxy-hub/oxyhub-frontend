import { useState } from 'react';
const Register = () => {
  const [formState, setFormState] = useState({
    first_name: '',
    last_name: '',
    id_type: '',
    id_number: '',
  });

  const updateFormState = (value, name) => {
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type='text'
          name='first_name'
          placeholder='Enter your first name here'
          value={formState.first_name}
          onChange={e => updateFormState(e.target.value, e.target.name)}
        />
        <input
          type='text'
          name='last_name'
          placeholder='Enter your last name here'
          value={formState.last_name}
          onChange={e => updateFormState(e.target.value, e.target.name)}
        />
        <input
          type='text'
          name='id_type'
          placeholder='Id type '
          value={formState.id_type}
          onChange={e => updateFormState(e.target.value, e.target.name)}
        />
        <input
          type='text'
          name='id_number'
          placeholder='Id number'
          value={formState.id_type}
          onChange={e => updateFormState(e.target.value, e.target.name)}
        />
        <button id='submit-userinfo-button'>Submit</button>
      </form>
    </div>
  );
};

export default Register;
