import SyncLoader from 'react-spinners/SyncLoader';
import {LoaderContainer, LoaderWrapper} from './loader.styled';

const Loader = () => {
	return (
		<LoaderContainer>
			<LoaderWrapper>
				<SyncLoader color='#ffffff' loading={true} margin={10} size={25} />
			</LoaderWrapper>
		</LoaderContainer>
	);
};

export default Loader;
