import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";

export const usePost = (id) => {
  const [post, setPost] = useState(null);

  async function loadPost() {
    const db = getFirestore();
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    setPost({
      ...docSnap.data(),
      id: docSnap.id,
    });
  }

  useEffect(() => {
    loadPost();
  }, [id]);

  return [post, loadPost];
};
