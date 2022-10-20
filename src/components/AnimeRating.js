import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const AnimeRating = ({ animeId }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  let { user } = useAuth0();

  const postAnimeRating = async (rating) => {
    await fetch(`/api/rating`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.sub,
        anime_id: animeId,
        rating: rating,
      }),
    });
  };

  const fetchAnimeRating = async () => {
    const res = await fetch(
      `/api/rating/?user_id=${user?.sub}&anime_id=${animeId}`
    );

    const data = await res.json();
    setRating(data?.data?.rating);
  };
  useEffect(() => {
    fetchAnimeRating();
  }, [user]);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <Star
            key={index}
            onClick={() => {
              setRating(ratingValue);
              if (user) postAnimeRating(rating);
            }}
          >
            <StarInput type={"radio"} name={"rating"} value={ratingValue} />
            <FaStar
              size={100}
              color={
                ratingValue <= (hover || rating) ? "var(--primary)" : "#e4e5e9"
              }
              onMouseEnter={() => {
                setHover(ratingValue);
              }}
              onMouseLeave={() => {
                setHover(null);
              }}
            />
          </Star>
        );
      })}
    </div>
  );
};

export default AnimeRating;

const StarInput = styled.input`
  &[type="radio"] {
    display: none;
  }
`;

const Star = styled.label`
  cursor: pointer;
  transition: all 200ms;
`;
