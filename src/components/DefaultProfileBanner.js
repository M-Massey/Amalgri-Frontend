import styled from "styled-components";
import { BsCardImage } from "react-icons/bs";

const DefaultProfileBanner = () => {
  return (
    <DefaultBanner>
      <BsCardImage color={"var(--white)"} size={100} />
    </DefaultBanner>
  );
};

export default DefaultProfileBanner;

const DefaultBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  height: 500px;
  min-width: 700px;
`;
