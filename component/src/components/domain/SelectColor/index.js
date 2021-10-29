import React from 'react';
import { ColorConsumer } from '../../../contexts/color';
import { useHistory } from 'react-router';
const colors = [
  '#f3f0ff',
  '#e5dbff',
  '#d0bfff',
  '#b197fc',
  '#9775fa',
  '#845ef7',
  '#7950f2',
  '#6741d9',
  '#5f3dc4',
];

const SelectColors = () => {
  const history = useHistory();

  const onClick = (action, color) => {
    action(color);
    history.push('/context');
  };
  return (
    <div>
      <h2>색상을 선택하세요</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  onClick(actions.setColor, color);
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubColor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;
