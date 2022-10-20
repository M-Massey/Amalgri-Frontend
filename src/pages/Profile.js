import { useParams} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import AnimeList from "../components/AnimeList";
import ProfileTabs from "../components/ProfileTabs";
import styled from "styled-components";
import DefaultProfileBanner from "../components/DefaultProfileBanner";
import LoadingScreen from "../components/LoadingScreen";
import { LoadingCard } from "../components/LoadingScreen";

const Profile = () => {
  const { user} = useAuth0();
  const [favouriteList, setFavouriteList] = useState([]);
  const [historyList, setHistoryList] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasList, setHasList] = useState(false);
  const [base64, setBase64] = useState("");
  const [hasBanner, setHasBanner] = useState(false);
  const grayscale = true;

  const handleOnChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBase64(reader.result);
    };
  };

  let { profileTypeId } = useParams();

  const fetchFavourtieProfile = async () => {
    setHasList(false);
    const res = await fetch(`/api/favourite/${user?.sub}`);
    const { data } = await res.json();
    setFavouriteList(data);
    setHasList(true);
    return data;
  };

  const fetchWatchlistProfile = async () => {
    setHasList(false);
    const res = await fetch(`/api/watchlist/${user?.sub}`);
    const { data } = await res.json();
    setWatchlist(data);
    setHasList(true);
    return data;
  };

  const fetchHistoryProfile = async () => {
    setHasList(false);
    const res = await fetch(`/api/history/${user?.sub}`);
    const { data } = await res.json();
    setHistoryList(data);
    setHasList(true);
    return data;
  };

  const updateUserProfileBanner = async (endpoint, userId, base64String) => {
    await fetch(`${endpoint}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userId,
        profileBanner: base64String,
      }),
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    updateUserProfileBanner(`/api/user`, user?.sub, base64);
    setHasBanner(true);
  };

  const getProfileBanner = async () => {
    if (user) {
      const res = await fetch(`/api/user/${user?.sub}`);
      const { data } = await res.json();

      setBase64(data);
      setHasBanner(data);
      setLoading(false);
      return data;
    }
  };

  const fetchProfileBanner = async () => {
    await getProfileBanner();
  };

  useEffect(() => {
    if (user !== "undefined") {
      fetchProfileBanner();
    }
  }, [user]);

  const fetchAllLists = () => {
    fetchFavourtieProfile();
    fetchWatchlistProfile();
    fetchHistoryProfile();
  };

  useEffect(() => {
    if (user) {
      fetchAllLists();
    }
  }, [user, profileTypeId]);

  return !loading ? (
    <Wrapper>
      <ProfileBannerContainer>
        {base64 ? (
          <ProfileBannerImage src={base64} />
        ) : (
          // <label htmlFor="file">
          <DefaultProfileBanner />
          // </label>
        )}
        <form onSubmit={handleSumbit}>
          {!hasBanner && (
            <FileInputContainer>
              <StyledLabel Htmlfor={"file"}>
                <FileInput
                  type={"file"}
                  id={"file"}
                  accept={"images/*"}
                  onChange={handleOnChange}
                />
                Choose a Photo
              </StyledLabel>
              <ProfileSubmitButton type="submit">Save</ProfileSubmitButton>
            </FileInputContainer>
          )}
        </form>
      </ProfileBannerContainer>
      <Background>
        <ProfileTabs />
      </Background>
      <ListContainer>
        {profileTypeId === "favourites" &&
          (hasList ? (
            <AnimeList
              animeList={favouriteList}
              profileTypeId={profileTypeId}
              grayscale={true}
              fetchFavourtieProfile={fetchFavourtieProfile}
              fetchAllLists={fetchAllLists}
            />
          ) : (
            <LoadingCard />
          ))}
        {profileTypeId === "history" &&
          (hasList ? (
            <AnimeList
              animeList={historyList}
              grayscale={true}
              fetchAllLists={fetchAllLists}
            />
          ) : (
            <LoadingCard />
          ))}
        {profileTypeId === "watchlist" &&
          (hasList ? (
            <AnimeList
              animeList={watchlist}
              grayscale={grayscale ? 1 : 0}
              fetchAllLists={fetchAllLists}
            />
          ) : (
            <LoadingCard />
          ))}
      </ListContainer>
      {/* <Outlet /> */}
    </Wrapper>
  ) : (
    <Wrapper>
      <LoadingScreen />
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListContainer = styled.div``;

const ProfileSubmitButton = styled.button`
  color: var(--black);
  font-weight: bold;
  background-color: whitesmoke;
  border-radius: 10px;
  height: 2rem;
  width: 8rem;

  :hover {
    color: var(--white);
    background-color: var(--black);
    border: 1px solid var(--white);
  }
`;

const ProfileBannerImage = styled.img`
  height: 500px;
  width: auto;
  max-width: 100vw;
  object-fit: cover;
`;

const ProfileBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const Background = styled.div`
  display: flex;
  background-color: var(--black);
  width: 100vw;
  justify-content: center;
  padding: 1rem 0 0 0;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;

const FileInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--black);
  height: 2rem;
  width: 10rem;
  font-weight: bold;
  background-color: var(--primary);
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    color: var(--white);
    background-color: var(--black);
    border: 1px solid var(--white);
  }
`;

const FileInputContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0.75rem 0;
`;
