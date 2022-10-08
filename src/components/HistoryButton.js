import { MdOutlineHistoryEdu } from "react-icons/md";
import styled from "styled-components";

const HistoryButton = ({ onClickFunc }) => {
  return <StyledButton onClick={onClickFunc} size={20}></StyledButton>;
};

export default HistoryButton;

const StyledButton = styled(MdOutlineHistoryEdu)`
  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`;
