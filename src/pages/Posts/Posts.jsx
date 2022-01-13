import "./Posts.scss";
import { usePosts } from "../../hooks/usePosts";
import { Post } from "../../components/Post/Post";

export const Posts = () => {
  const posts = usePosts();

  if (posts === null) {
    return (
      <div className="postsPage">
        <span className="loadPosts">Cargando Posts</span>
      </div>
    );
  }

  return (
    <div className="postsPage sideSpacing">
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};
