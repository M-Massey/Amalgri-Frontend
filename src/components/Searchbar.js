import Input from "./styled/elements/Input";
import Button from "./styled/elements/Button";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AnimeList from "./AnimeList";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import useDebounce from "../hooks/useDebounce";

const Searchbar = () => {
  const [genreSelection, setGenreSelection] = useState("All");
  const [genres, setGenres] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const q = searchParams.get("q");
  const genre = searchParams.get("genre");

  const debouncedSearch = useDebounce(search, 500);

  const fetchAnimeSearchResults = async () => {
    setLoading(true);
    const res = await fetch(`/api/anime/search/?q=${debouncedSearch}`);
    const { data } = await res.json();
    setSearchResults(data);
    setLoading(false);
    return data;
  };

  useEffect(() => {
    if (debouncedSearch) fetchAnimeSearchResults();
  }, [debouncedSearch]);

  const HandleSearch = () => {
    setSearchParams({ q: `${search}`, genre: `${genreSelection}` });
    fetchAnimeSearchResults();
    setSearch("");
  };

  return (
    <Wrapper>
      <SearchBarContainer>
        <StyledInput
          type={"text"}
          placeholder={"Search for anime..."}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <StyledButton onClick={HandleSearch}>
          <SearchIcon color={`var(--primary)`} size={30} />
        </StyledButton>
      </SearchBarContainer>
      <AnimeListContainer>
        <AnimeList animeList={searchResults} grayscale={true} />
      </AnimeListContainer>
    </Wrapper>
  );
};

export default Searchbar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
`;

const SearchBarContainer = styled.div`
  border: 3px var(--primary) solid;
  border-radius: 7px;
  overflow: hidden;
  padding: 0.25rem 1rem;
  position: relative;
  width: 500px;
  background-color: var(--black);
`;

const StyledInput = styled(Input)`
  border: none;
  background: none;
  color: var(--primary);
  font-size: 1.25rem;
  height: 2rem;

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled(Button)`
  display: inline-flex;
  border: none;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 0.5rem;
  bottom: 1%;
`;

const AnimeListContainer = styled.div`
  width: 100%;
`;
