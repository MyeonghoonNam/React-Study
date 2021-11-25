import { useParams } from 'react-router-dom';

const data = {
  hoon: {
    name: '훈',
    description: '리액트를 좋아하는 개발자',
  },
  myeong: {
    name: '명',
    description: '뷰를 좋앟하는 개발자',
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};
export default Profile;
