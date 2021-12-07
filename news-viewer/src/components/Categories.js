import styled from '@emotion/styled';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 16px;
  width: 768px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 18px;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 4px;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 16px;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((category) => (
        <Category key={category.name}>{category.text}</Category>
      ))}
    </CategoriesBlock>
  );
};
export default Categories;
