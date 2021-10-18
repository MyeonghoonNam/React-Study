import LoginForm from '../components/LoginForm';

export default {
  title: 'Component/LoginForm',
  component: LoginForm,
  argTypes: {
    onSubmit: { actions: 'onSubmit' },
  },
};

export const Default = (args) => {
  return <LoginForm {...args} />;
};
