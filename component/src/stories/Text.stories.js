import Text from '../components/Text';

export default {
  title: 'Component/Text',
  component: Text,
  argTypes: {
    size: { control: 'number' },
    strong: { control: 'boolean' },
    underline: { control: 'boolean' },
    deleteline: { control: 'boolean' },
    count: { defaultValue: 10 },
    // style: { defaultValue: { color: 'red' } },
  },
};

export const Default = (args) => {
  // const testStyle = { color: 'red' };
  return <Text>Text</Text>;
};
