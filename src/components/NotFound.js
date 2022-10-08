import styled from "styled-components";
import Gif from "../assets/zorolostgif.gif";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Wrapper>
      <StyledNotFoundTitle>Page Not Found</StyledNotFoundTitle>
      <StyledGif src={Gif} alt={"404 Page - Zoro Lost Gif"} />
      <StyledNotFoundText>
        Don't worry though, let's head <Link to={`/`}> home</Link>
      </StyledNotFoundText>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledGif = styled.img`
  width: 50vw;
`;

const StyledNotFoundTitle = styled.span`
  margin: 0 0 1rem 0;
  font-weight: bold;
  font-size: 2rem;
  color: var(--white);
`;

const StyledNotFoundText = styled.span`
  margin: 1rem 0 0 0;
  color: var(--white);

  & > a {
    color: var(--primary);
  }
`;
