import { BsFillStopwatchFill } from "react-icons/bs";
import styled from "styled-components";

const Watchlist = ({ onClickFunc }) => {
  return <StyledButton onClick={onClickFunc} size={20}></StyledButton>;
};

export default Watchlist;
const StyledButton = styled(BsFillStopwatchFill)`
  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`;
