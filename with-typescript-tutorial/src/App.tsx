import { Comment } from './components/index';

const App = () => {
	return (
		<Comment
			date={new Date()}
			text="I hope you enjoy learning React!"
			author={{
				name: 'Kitty',
				avatarUrl: 'http://placekitten.com/g/64/64',
			}}
		/>
	);
};

export default App;
