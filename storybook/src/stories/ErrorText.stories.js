import ErrorText from '../components/ErrorText';

export default {
  title: 'Component/ErrorText',
  component: ErrorText,
  argTypes: {
    onClick: { actgion: 'onClick' },
  },
};

export const Default = (args) => {
  return <ErrorText {...args}>ErrorText</ErrorText>;
};
