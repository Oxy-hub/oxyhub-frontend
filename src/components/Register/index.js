import {
	RegisterContainer,
	GraphicSection,
	GraphicContainer,
	RegisterFormSection,
	RegisterFormContainer,
} from './register.styled';
import Graphic from './components/Graphic';
import GraphicText from './components/GraphicText';
const Register = () => {
	return (
		<RegisterContainer>
			<GraphicSection>
				<GraphicContainer>
					<Graphic />
					<GraphicText />
				</GraphicContainer>
			</GraphicSection>
			<RegisterFormSection>
				<RegisterFormContainer>
					{/* <FormHeader /> */}
					{/* <Form /> */}
				</RegisterFormContainer>
			</RegisterFormSection>
		</RegisterContainer>
	);
};

export default Register;
