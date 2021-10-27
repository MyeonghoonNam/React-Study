import styled from '@emotion/styled';

const CheckBoxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckBox = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: ${(props) => (props.checked ? 'none' : 'solid 0.1rem #dddddd')};
  background: ${(props) => (props.checked ? 'black' : 'white')};
  border-radius: 0.4rem;
  transition: all 150ms;
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const HiddenCheckBox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckBox = ({ checked, ...props }) => {
  return (
    <CheckBoxContainer>
      <HiddenCheckBox type={'checkbox'} defaultChecked={checked} {...props} />
      <StyledCheckBox defaultChecked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="19 7 10 17 5 12" />
        </Icon>
      </StyledCheckBox>
    </CheckBoxContainer>
  );
};

export default CheckBox;
