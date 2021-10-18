import Title from '../components/Title';

export default {
  title: 'Component/Title',
  component: Title,
  argTypes: {
    onClick: { actgion: 'onClick' },
  },
};

export const Default = (args) => {
  return <Title {...args}>Title</Title>;
};
