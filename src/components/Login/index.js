import {FormWrapper} from './login.styled';
import Form from './Form';
import Graphic from './Graphic';

const Login = () => {
	return (
		<>
			<div style={{width: '50%', margin: '0 auto'}}>
				<FormWrapper>
					<Form />
					<Graphic />
				</FormWrapper>
			</div>
		</>
	);
};

export default Login;
