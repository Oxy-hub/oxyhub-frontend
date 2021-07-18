import {Button} from './formbutton.styled';

const FormButton = ({children: text, isActive, isLoading, id}) => {
	return (
		<>
			<Button id={id} type='submit' isLoading={isLoading}>
				{text}
			</Button>
		</>
	);
};

export default FormButton;
