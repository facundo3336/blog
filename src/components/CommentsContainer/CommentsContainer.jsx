import { Comments } from "../Comments/Comments";
import { useState, useEffect } from "react";
import { CreateComment } from "../CreateComment/CreateComment";
import "./CommentsContainer.scss";
import { getCommentsTree } from "../../utilities/comments";
import { fetchComments } from "../../db/comments";

export const CommentsContainer = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    const items = await fetchComments(postId);
    setComments(getCommentsTree(items));
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [postId]);

  if (loading) {
    return (
      <div className="loadingComments">
        <div className="loadingContainer">
          <span>Cargando Comentarios</span>
        </div>
      </div>
    );
  }

  return (
    <div className="commentsSection sideSpacing">
      <CreateComment
        parentId={null}
        onCommentCreated={fetchData}
        postId={postId}
      />
      <Comments
        reloadComments={fetchData}
        postId={postId}
        comments={comments}
      />
    </div>
  );
};
