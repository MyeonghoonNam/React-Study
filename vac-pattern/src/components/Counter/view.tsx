import styled from '@emotion/styled';

interface Props {
  value: number;
  disabledIncrease: boolean;
  disabledDecrease: boolean;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Count = styled.span`
  display: block;
  font-size: 36px;
`;

const VCounter = ({
  value,
  disabledIncrease,
  disabledDecrease,
  onIncrease,
  onDecrease,
}: Props) => {
  return (
    <div>
      <Count>{value}</Count>
      <button type="button" disabled={disabledIncrease} onClick={onIncrease}>
        +
      </button>
      <button type="button" disabled={disabledDecrease} onClick={onDecrease}>
        -
      </button>
    </div>
  );
};

export default VCounter;
