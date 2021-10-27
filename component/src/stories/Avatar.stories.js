import Avatar from '@components/Avatar';

export default {
  title: 'Component/Avatar',
  component: Avatar,
  argTypes: {
    src: { defaultValue: 'https://picsum.photos/200' },
    shape: {
      defaultValue: 'circle',
      control: 'inline-radio',
      options: ['circle', 'round', 'sqaure'],
    },
    size: {
      defaultValue: 70,
      control: { type: 'range', min: 40, max: 200 },
    },
    mode: {
      defaultValue: 'cover',
      control: 'inline-radio',
      options: ['contain', 'cover', 'fill'],
    },
  },
};

export const Default = (args) => {
  return <Avatar {...args} />;
};
