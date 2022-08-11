import Avatar from '../Avatar/index';

interface Props {
	user: {
		name: string;
		avatarUrl: string;
	};
}

const UserInfo = ({ user }: Props) => {
	return (
		<div className="userInfo">
			<Avatar url={user.avatarUrl} />
			<div className="userInfo-name">{user.name}</div>
		</div>
	);
};

export default UserInfo;
