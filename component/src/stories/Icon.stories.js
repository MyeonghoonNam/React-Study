import Icon from '../components/Icon';

export default {
  title: 'Component/Icon',
  component: Icon,
  argTypes: {
    size: { defaultValue: 32, control: { type: 'range', min: 16, max: 80 } },
    strokeWidth: {
      defaultValue: 2,
      control: { type: 'range', min: 2, max: 6 },
    },
    rotate: { defaultValue: 0, control: { type: 'range', min: 0, max: 360 } },
    color: { defaultValue: '#222', control: 'color' },
  },
};

export const Default = (args) => {
  return (
    <>
      <Icon {...args} name="bell" />
      <Icon {...args} name="arrow-up-circle" />
      <Icon {...args} name="arrow-down-circle" />
    </>
  );
};
