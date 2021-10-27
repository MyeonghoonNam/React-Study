import styled from '@emotion/styled';

const IconWrapper = styled.i`
  display: inline-block;
`;

const Icon = ({
  name,
  size = 16,
  strokeWidth = 2,
  color = '#222',
  rotate,
  ...props
}) => {
  const shapeStyle = {
    width: size,
    height: size,
    transform: rotate && `rotate(${rotate}deg)`,
  };

  const iconStyle = {
    'stroke-width': strokeWidth,
    stroke: color,
    width: size,
    height: size,
  };

  const icon = require('feather-icons').icons[name];
  const svg = icon ? icon.toSvg(iconStyle) : ''; // Buffer.from 함수의 첫 번째 매개변수가 문자열, 버퍼, 배열버퍼, 배열, 유사배열객체 값이 들어가야 하므로 빈 문자열을 대입하는 삼항연산자 사용
  const base64 = Buffer.from(svg, 'utf8').toString('base64');

  return (
    <IconWrapper {...props} style={shapeStyle}>
      <img src={`data:image/svg+xml;base64,${base64}`} alt={name} />
    </IconWrapper>
  );
};

export default Icon;
