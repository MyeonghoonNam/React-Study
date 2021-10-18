import styled from 'styled-components';
import useForm from '../hooks/useForm';
import Button from './Button';
import ErrorText from './ErrorText';
import Input from './Input';

const CardForm = styled.form`
  width: 400px;
  padding: 16px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

// const sleep = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), 1000);
//   });
// };

const LoginForm = ({ onSubmit }) => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit,
    validate: ({ name, password }) => {
      const newErrors = {};

      if (!name) newErrors.name = '이름을 입력해주세요.';
      if (!password) newErrors.password = '비밀번호를 입력해주세요.';

      return newErrors;
    },
  });

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        style={{ marginTop: 8 }}
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Button type="submit" disabled={isLoading} style={{ marginTop: 14 }}>
        Login
      </Button>
    </CardForm>
  );
};

export default LoginForm;
