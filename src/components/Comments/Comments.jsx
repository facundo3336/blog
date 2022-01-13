import "./Comments.scss";
import { Comment } from "../Comment/Comment";

export const Comments = ({ postId, comments, reloadComments }) => {
  if (comments.length === 0) {
    return null;
  }
  return (
    <div className="commentsContainer">
      {comments.map((comment) => {
        return (
          <Comment
            reloadComments={reloadComments}
            postId={postId}
            key={comment.id}
            comment={comment}
          />
        );
      })}
    </div>
  );
};
