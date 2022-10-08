import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import styled from "styled-components";

const CommentPost = ({ animeId, fetchCommentSection }) => {
  let { user } = useAuth0();
  const [comment, setComment] = useState("");
  const MAX_CHARACTER_LENGTH = 250;

  const postComment = async () => {
    await fetch(`/api/comments`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.sub,
        nickname: user.nickname,
        picture: user.picture,
        anime_id: animeId,
        comment: comment,
      }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (MAX_CHARACTER_LENGTH - comment.length < 0 || comment.length < 1) {
      return;
    } else {
      postComment();
      fetchCommentSection(animeId);
      setComment("");
    }
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <CommentContainer>
        <CommentInput
          placeholder={
            user
              ? "What did you think?"
              : `Login or Signup to tell us what you think!`
          }
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
          disabled={user ? false : true}
        />
        <SubmitContainer>
          {user && (
            <CharacterCount
              characterCount={MAX_CHARACTER_LENGTH - comment.length}
            >
              {MAX_CHARACTER_LENGTH - comment.length}
            </CharacterCount>
          )}
          <CommentButton
            type="Submit"
            characterCount={MAX_CHARACTER_LENGTH - comment.length}
            disabled={
              MAX_CHARACTER_LENGTH - comment.length <= 0 || !user ? true : false
            }
          >
            Submit
          </CommentButton>
        </SubmitContainer>
      </CommentContainer>
    </form>
  );
};

export default CommentPost;

const CommentInput = styled.textarea`
  height: 75px;
  width: 80%;
  margin: 0.25rem 0 0 0.5rem;
  resize: none;
  border: none;
  background-color: var(--white);

  &:focus {
    outline: none;
  }

  &:hover {
    :disabled {
      cursor: not-allowed;
    }
  }
`;

const CommentButton = styled.button`
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  border-radius: 10px;
  border: 1px solid var(--black);

  :disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: var(--black);
    color: white;
    font-weight: bold;

    :disabled {
      background-color: var(--white);
      color: var(--black);
      font-weight: normal;
    }
  }
`;

const CommentContainer = styled.div`
  display: flex;
  border: 1px solid var(--black);
  border-radius: 7px;
  margin: 1rem 0 0 0;
`;

const CharacterCount = styled.span`
  color: ${(props) =>
    props.characterCount < 55
      ? props.characterCount < 0
        ? "var(--red)"
        : "var(--dark-blue)"
      : "var(--black)"};
  font-weight: 400;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
`;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 0 0.25rem 0;
`;
