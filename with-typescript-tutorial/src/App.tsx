import { Clock, Comment } from './components/index';

const App = () => {
	return (
		<div>
			<Clock />
			<Comment
				date={new Date()}
				text="I hope you enjoy learning React!"
				author={{
					name: 'Kitty',
					avatarUrl: 'http://placekitten.com/g/64/64',
				}}
			/>
		</div>
	);
};

export default App;
