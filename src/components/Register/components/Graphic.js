import {GraphicContainer} from './graphic.styled';
import {ReactComponent as RegisterGraphic} from '../../../assets/oxyhub_register.svg';

const Graphic = () => {
	return (
		<GraphicContainer>
			<RegisterGraphic style={{width: '100%'}} />
		</GraphicContainer>
	);
};

export default Graphic;
