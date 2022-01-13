import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const db = getFirestore();
      let itemsCollection = collection(db, "posts");
      const querySnapshot = await getDocs(itemsCollection);
      const items = querySnapshot.docs.map((document) => {
        return {
          ...document.data(),
          id: document.id,
        };
      });
      setPosts(items);
    }

    fetchData();
  }, []);

  return posts;
};
