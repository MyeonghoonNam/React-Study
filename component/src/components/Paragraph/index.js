import PropTypes from 'prop-types'

function Paragraph({ children, size = 16, color = "white" }) {
  return <p style={{ fontSize: size, color }}>{children}</p>
}

Paragraph.propTypes = {
  /* 태그의 값 내용없는 경우 에러발생 */
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
}

export default Paragraph;