import SignUpForm from '../components/SignUpForm';

export default {
  title: 'Component/SignUpForm',
  component: SignUpForm,
  argTypes: {
    onSubmit: { actions: 'onSubmit' },
  },
};

export const Default = (args) => {
  return <SignUpForm {...args} />;
};
