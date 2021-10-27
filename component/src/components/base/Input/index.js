import PropTypes from 'prop-types'

const Input = ({ width, height, placeholder, type, ...props }) => {
  const inputStyle = {
    width,
    height,
    paddingLeft: '15px',
    border: '1px solid #DBDBDB',
    borderRadius: '3px',
  }

  return (
    <input
      {...props}
      style={{ ...props.style, ...inputStyle }}
      placeholder={placeholder}
      type={type}
    />
  )
}

Input.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
}

export default Input
