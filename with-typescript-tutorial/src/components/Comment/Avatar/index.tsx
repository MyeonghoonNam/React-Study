interface Props {
	url: string;
}
const Avatar = ({ url }: Props) => {
	return <img className="avatar" src={url} alt="avatar" />;
};

export default Avatar;
