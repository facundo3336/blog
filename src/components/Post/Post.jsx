import { Link } from "react-router-dom";
import "./Post.scss";

export const Post = ({ post }) => {
  return (
    <Link className="postContainer" to={`/post/` + post.id}>
      <div>
        <div
          className="postImage"
          style={{
            backgroundImage: `url(` + post.imageUrl + `)`,
          }}
        ></div>
        <h2>{post.title}</h2>
        <p>{post.subtitle}</p>
      </div>
    </Link>
  );
};
