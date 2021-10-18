const Box = ({ width, height, backgroundColor = 'red' }) => {
  const style = {
    width,
    height,
    backgroundColor,
  };

  return <div style={style} />;
};

export default Box;
