import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import NewsItem from './NewsItem';

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

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=7cfafbc6441c457e8a96802f5b096f59',
        );

        setArticles(data.articles);
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <NewsListBlock>Loading...</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
