import Button from '../components/Button';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    onClick: { actgion: 'onClick' },
  },
};

export const Default = (args) => {
  return <Button {...args}>Button</Button>;
};
