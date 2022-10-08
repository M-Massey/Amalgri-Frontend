import AnimeCard from "./AnimeCard";
import StyledAnimeList from "./styled/AnimeList.styled";

const AnimeList = ({
  animeList,
  profileTypeId,
  grayscale,
  fetchFavourtieProfile,
  fetchAllLists,
}) => {
  return (
    <StyledAnimeList>
      {animeList.map((anime) => {
        return (
          <AnimeCard
            key={anime.mal_id}
            anime={anime}
            profileTypeId={profileTypeId}
            grayscale={grayscale}
            fetchFavourtieProfile={fetchFavourtieProfile}
            fetchAllLists={fetchAllLists}
          />
        );
      })}
    </StyledAnimeList>
  );
};

export default AnimeList;
