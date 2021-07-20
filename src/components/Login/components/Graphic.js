import React from 'react';
import {GraphicContainer} from './graphic.styled';
import {ReactComponent as LoginGraphic} from '../../../assets/oxyhub_login.svg';

const Graphic = () => {
	return (
		<GraphicContainer>
			<LoginGraphic
				style={{
					height: '80%',
				}}
			/>
		</GraphicContainer>
	);
};

export default Graphic;
