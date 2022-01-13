import { useState } from "react";
import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import { Button } from "../Button/Button";
import { Comments } from "../Comments/Comments";
import { CommentsContainer } from "../CommentsContainer/CommentsContainer";
import { Popup } from "../Popup/Popup";
import "./PostDetail.scss";
import {
  getFirestore,
  increment,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

export const PostDetail = ({}) => {
  const { id } = useParams();
  const [showPopupVideo, setShowPopupVideo] = useState(false);
  const [post, reloadPost] = usePost(id);

  function handleClick() {
    setShowPopupVideo(!showPopupVideo);
  }

  async function handleLikesClick() {
    const db = getFirestore();

    const washingtonRef = doc(db, "posts", post.id);

    await updateDoc(washingtonRef, {
      likes: increment(+1),
    });
    reloadPost();
  }

  if (post === null) {
    return (
      <div className="postDetailPage">
        <div className="loadDetails">
          <span>cargando detalles</span>
        </div>
      </div>
    );
  }

  return (
    <div className="postDetailPage">
      <div className="sideSpacing">
        <div
          className="postDetailImage"
          style={{
            backgroundImage: `url(` + post.imageUrl + `)`,
          }}
        ></div>
        <h2>{post.title}</h2>
        <div
          className="postDetailDescription"
          dangerouslySetInnerHTML={{ __html: post.description }}
        ></div>
        <div className="postDetailButtonContainer">
          <i onClick={handleLikesClick} className="far fa-heart">
            {post.likes}
          </i>
          <Button
            handleClick={handleClick}
            color={"btn-blue"}
            text={"Ver video"}
          />
        </div>
      </div>

      {showPopupVideo && (
        <Popup close={handleClick}>
          <iframe src={post.videoUrl} frameborder="0"></iframe>
        </Popup>
      )}

      <CommentsContainer postId={post.id} />
    </div>
  );
};
