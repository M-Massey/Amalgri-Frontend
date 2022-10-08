import { MdFavorite } from "react-icons/md";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
const FavouriteButton = ({ onClickFunc }) => {
  return <StyledButton onClick={onClickFunc} size={20}></StyledButton>;
};

export default FavouriteButton;

const StyledButton = styled(MdFavorite)`
  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`;
