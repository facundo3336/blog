import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Button } from "../Button/Button";
import { validateComment } from "../../utilities/validation";
import { Notice } from "../Notice/Notice";
import "./CreateComment.scss";

export const CreateComment = ({
  postId,
  parentId,
  colorClass,
  onCommentCreated,
}) => {
  const [notice, setNotice] = useState(null);
  const [comment, setComment] = useState({
    name: "",
    text: "",
  });

  function handleChange(e, key) {
    setComment({
      ...comment,
      [key]: e.target.value,
    });
  }

  function handleEditorChange(content) {
    setComment({
      ...comment,
      text: content,
    });
  }

  function closeNotice() {
    setNotice(null);
  }

  async function handleClick() {
    try {
      validateComment(comment);

      const db = getFirestore();

      const docRef = await addDoc(collection(db, "comments"), {
        ...comment,
        postId: postId,
        parentId: parentId,
        date: Date.now(),
      });
      if (docRef) {
        onCommentCreated();
      }
    } catch (error) {
      setNotice(error.message);
    }
  }

  return (
    <div className={`createCommentContainer ` + colorClass}>
      <h3>Deja un comentario!</h3>
      {notice && <Notice message={notice} close={closeNotice} />}
      <div className="createCommentInputContainer">
        <label htmlFor="name">Nombre: </label>
        <input
          onChange={(e) => handleChange(e, "name")}
          value={comment.name}
          name="name"
        />
      </div>
      <div>
        <ReactQuill
          onChange={handleEditorChange}
          value={comment.text}
          theme="snow"
        />
      </div>
      <Button
        color={"btn-blue"}
        text={"Crear Comentario"}
        handleClick={handleClick}
      />
    </div>
  );
};
