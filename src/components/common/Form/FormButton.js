import {Button} from './formbutton.styled';

const FormButton = ({children: text, submitting, ...props}) => {
	return (
		<>
			<Button {...props} type='submit' submitting={submitting}>
				{!submitting ? text : 'Saving...'}
			</Button>
		</>
	);
};

export default FormButton;
