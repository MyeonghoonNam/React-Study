import { useParams, useLocation } from 'react-router-dom';
import qs from 'qs';

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
  const { search } = useLocation();
  const profile = data[username];
  const query = qs.parse(search, {
    ignoreQueryPrefix: true, // 쿼리 문자열 맨 앞의 ?를 생략한다.
  });
  const detailQueryNumber = query.detail;
  // url 끝에  ?detail=15을 입력하고 엔터를 치면 데이터 활용 가능
  // 주의점 : ?value=1 혹은 ?value=true와 같이 숫자나 논리 자료형(boolean)을 사용한다고 해서 해당 값이 우리가 원하는 형태로 변환되는 것이 아니라, "1", "true"와 같이 문자열 형태로 받아지므로 타입 변환에 주의하자.

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      {detailQueryNumber && <p>{detailQueryNumber}</p>}
    </div>
  );
};
export default Profile;
