import {Button} from './formbutton.styled';

const FormButton = ({children: text, ...props}) => {
	return (
		<>
			<Button {...props} type='submit'>
				{text}
			</Button>
		</>
	);
};

export default FormButton;
