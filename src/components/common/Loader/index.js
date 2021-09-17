import SyncLoader from 'react-spinners/SyncLoader';
import { LoaderContainer, LoaderWrapper } from './loader.styled';

const Loader = () => (
  <LoaderContainer>
    <LoaderWrapper>
      <SyncLoader color="#ffffff" loading margin={10} size={25} />
    </LoaderWrapper>
  </LoaderContainer>
);

export default Loader;
