import Searchbar from "../components/Searchbar";
import styled from "styled-components";

const Homepage = () => {
  return (
    <Wrapper>
      <BannerImage
        src={
          process.env.PUBLIC_URL +
          "/132-1326686_creepy-yuno-anime-banners-de-youtube.png"
        }
      />
      <Searchbar />
    </Wrapper>
  );
};

export default Homepage;

const Wrapper = styled.div`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const BannerImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 450px;
`;
