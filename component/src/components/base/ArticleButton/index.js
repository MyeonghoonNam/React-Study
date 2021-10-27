import { secondaryColor, buttonTextColor } from '../../../constants/Color'

const ArticleButton = ({
  color = buttonTextColor,
  backgroundColor = secondaryColor,
  width = '80px',
  height = '30px',
  borderRadius = '4px',
  fontSize = '20px',
  border = '',
  children,
  ...props
}) => {
  const buttonStyle = {
    backgroundColor,
    color,
    borderRadius,
    width,
    height,
    fontSize,
    border,
  }

  return (
    <button {...props} style={{ ...props.style, ...buttonStyle }}>
      {children}
    </button>
  )
}
export default ArticleButton
