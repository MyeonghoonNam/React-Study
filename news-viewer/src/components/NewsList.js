import axios from 'axios';
import styled from '@emotion/styled';
import NewsItem from './NewsItem';
import usePromise from '../hooks/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 48px;
  width: 768px;
  margin: 0 auto;
  margin-top: 32px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;

    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7cfafbc6441c457e8a96802f5b096f59`,
    );
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
