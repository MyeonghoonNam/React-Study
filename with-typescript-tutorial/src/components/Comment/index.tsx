import UserInfo from './UserInfo';

interface Props {
	date: Date;
	text: string;
	author: {
		name: string;
		avatarUrl: string;
	};
}

const Comment = ({ date, text, author }: Props) => {
	return (
		<div className="comment">
			<UserInfo user={author} />
			<div className="comment-text">{text}</div>
			<div className="comment-date">{date.toLocaleDateString()}</div>
		</div>
	);
};

export default Comment;
