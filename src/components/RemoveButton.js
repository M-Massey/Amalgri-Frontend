import { MdClose } from "react-icons/md";
import styled from "styled-components";

const RemoveButton = ({ onClickFunc }) => {
  return (
    <StyledButton onClick={onClickFunc} size={20}>
      X
    </StyledButton>
  );
};

export default RemoveButton;

const StyledButton = styled(MdClose)`
  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`;
