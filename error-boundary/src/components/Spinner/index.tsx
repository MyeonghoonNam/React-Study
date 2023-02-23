import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const Spinner = () => {
  return (
    <Container>
      <FaSpinner />
    </Container>
  );
};

const Container = styled.i`
  font-size: 20px;
  animation: spin 2s linear infinite;
  display: inline-block;
  align-self: center;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
