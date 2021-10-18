const Box = ({ width, height, backgroundColor = 'red' }) => {
  const style = {
    width,
    height,
    backgroundColor,
    borderRadius: '50%',
  };

  return <div style={style} />;
};

export default Box;
