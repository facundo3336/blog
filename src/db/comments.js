import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export async function fetchComments(postId) {
  const db = getFirestore();

  let itemsCollection = collection(db, "comments");
  if (postId !== undefined) {
    itemsCollection = query(itemsCollection, where("postId", "==", postId));
  }

  const querySnapshot = await getDocs(itemsCollection);
  const items = querySnapshot.docs.map((comment) => {
    return {
      ...comment.data(),
      id: comment.id,
    };
  });

  return items;
}
