import { useState } from "react";
import { Button } from "../Button/Button";
import "./CreatePost.scss";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { validatePost } from "../../utilities/validation";
import { Notice } from "../Notice/Notice";

export const CreatePost = () => {
  const navigate = useNavigate();

  const [notice, setNotice] = useState(null);

  const [post, setPost] = useState({
    title: "",
    subtitle: "",
    description: "",
    imageUrl: "",
    like: 0,
  });

  function closeNotice() {
    setNotice(null);
  }

  function handleChange(e, key) {
    setPost({
      ...post,
      [key]: e.target.value,
    });
  }

  function handleEditorChange(content) {
    setPost({
      ...post,
      description: content,
    });
  }

  async function handleClick() {
    try {
      validatePost(post);

      const db = getFirestore();

      const docRef = await addDoc(collection(db, "posts"), post);
      if (docRef.id) {
        navigate(`/post/${docRef.id}`);
      }
    } catch (error) {
      setNotice(error.message);
    }
  }

  return (
    <div className="createPostPage">
      <div className="createPostContainer">
        {notice && <Notice close={closeNotice} message={notice} />}
        <div className="createPostInputContainer">
          <label htmlFor="title">Titulo: </label>
          <input
            onChange={(e) => handleChange(e, "title")}
            value={post.title}
            name="title"
          />
        </div>
        <div className="createPostInputContainer">
          <label htmlFor="subTitle">Subtitulo: </label>
          <input
            onChange={(e) => handleChange(e, "subtitle")}
            value={post.subtitle}
            name="subTitle"
          />
        </div>
        <div className="createPostInputContainer">
          <label htmlFor="imageUrl">URl de la Imagen: </label>
          <input
            onChange={(e) => handleChange(e, "imageUrl")}
            value={post.imageUrl}
            name="imageUrl"
          />
        </div>
        <div className="createPostInputContainer">
          <ReactQuill
            theme="snow"
            value={post.description}
            onChange={handleEditorChange}
          />
        </div>
        <Button
          handleClick={handleClick}
          text={"Crear Post"}
          color={"btn-blue"}
        />
      </div>
    </div>
  );
};
