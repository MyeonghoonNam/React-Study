const Text = ({
  children,
  block,
  paragraph,
  size,
  strong,
  underline,
  deleteline,
  color,
  ...props
}) => {
  const TextBox = block ? 'div' : paragraph ? 'p' : 'span';
  const fontStyle = {
    fontSize: size > 0 && size,
    fontWeight: strong && 'bold',
    textDecoration: underline && 'underline',
    color,
  };

  if (deleteline) {
    children = <del>{children}</del>;
  }

  return (
    <TextBox style={{ ...props.style, ...fontStyle }} {...props}>
      {children}
    </TextBox>
  );
};

export default Text;
