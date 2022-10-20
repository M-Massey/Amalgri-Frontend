import { useState } from "react";
import styled from "styled-components";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";

const CommentSection = ({comments}) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <CommentTitle
        onClick={() => {
          setOpen(!open);
        }}
      >
        <ReviewTitle>
          {open ? <GoTriangleDown /> : <GoTriangleRight />}Reviews
        </ReviewTitle>
      </CommentTitle>
      {open &&
        comments.map((comment, index) => {
          return (
            <UserCommentContainer key={comment._id}>
              <ImagePlaceHolder src={comment?.picture} />
              <UserComment>
                <Username>{comment?.nickname}</Username>
                <CommentText key={index}>{comment?.comment}</CommentText>
              </UserComment>
            </UserCommentContainer>
          );
        })}
    </Wrapper>
  );
};

export default CommentSection;

const Wrapper = styled.div`
  width: 100%;
`;

const CommentText = styled.div`
  font-size: 1.25rem;
  word-wrap: break-word;
`;

const CommentTitle = styled.h2`
  font-size: 1.25rem;
  margin: 1.75rem 0 1rem 0;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const ImagePlaceHolder = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const UserCommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem 1rem;
  width: 100%;
`;

const UserComment = styled.div`
  width: 80%;
`;

const Username = styled.div`
  font-weight: bold;
  margin: 0 0 0.25rem 0;
`;

const ReviewTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
