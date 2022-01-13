import { getDate } from "../../utilities/date";
import { Button } from "../Button/Button";
import "./Comment.scss";
import { useState } from "react";
import { Popup } from "../Popup/Popup";
import { CreateComment } from "../CreateComment/CreateComment";
import { Comments } from "../Comments/Comments";

export const Comment = ({ comment, postId, reloadComments }) => {
  const [showReplyComment, setShowReplyComment] = useState(false);

  function handleClick() {
    setShowReplyComment(!showReplyComment);
  }

  function handleCommentCreated() {
    setShowReplyComment(false);
    reloadComments();
  }

  return (
    <div className="commentContainer">
      <p
        className="commentText"
        dangerouslySetInnerHTML={{ __html: comment.text }}
      ></p>
      <span className="commentName"> {comment.name} - </span>
      <span>{getDate(comment.date)}</span>
      <Button handleClick={handleClick} text="Responder" color={"btn-white"} />
      {showReplyComment && (
        <Popup close={handleClick}>
          <CreateComment
            parentId={comment.id}
            postId={postId}
            colorClass={"background-white"}
            onCommentCreated={handleCommentCreated}
          />
        </Popup>
      )}
      <Comments postId={postId} comments={comment.replies} />
    </div>
  );
};
