import styled, { keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <LoadIcon size={50} />
    </LoadingContainer>
  );
};

export const LoadingCard = () => {
  return (
    <LoadingCardContainer>
      <LoadIcon size={50} />
    </LoadingCardContainer>
  );
};

export default LoadingScreen;

const LoadingContainer = styled.div`
  background-color: var(--black);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingCardContainer = styled.div`
  background-color: var(--black);
  width: 100vw;
  height: calc(100vh - 60vh);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Rotating = keyframes`
100% {
  transform: rotate(360deg)
}`;

const LoadIcon = styled(AiOutlineLoading3Quarters)`
  height: 5rem;
  width: 5rem;
  color: var(--primary);

  animation: ${Rotating} 1.5s infinite;
`;
