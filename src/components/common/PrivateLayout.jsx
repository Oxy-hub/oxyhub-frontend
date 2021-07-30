import {useEffect} from 'react';

const PrivateLayout = props => {
	useEffect(() => {
		console.log('Private Route Rerendering');
	});
	return (
		<>
			<nav>This is a private navbar</nav>
			{props.children}
			<footer>This is a private footer</footer>
		</>
	);
};

export default PrivateLayout;
