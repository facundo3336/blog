export function getCommentsTree(comments) {
  let parents = comments.filter((comment) => {
    if (!comment.parentId) return true;
  });

  const tree = [];
  parents.forEach((parent) => {
    tree.push(getCommentTree(parent, comments));
  });
  return tree;
}

function getCommentTree(comment, comments) {
  const children = comments.filter((c) => c.parentId === comment.id);
  if (children.length === 0) {
    return { ...comment, replies: [] };
  }

  const replies = [];
  children.forEach((child) => {
    replies.push(getCommentTree(child, comments));
  });

  return {
    ...comment,
    replies,
  };
}
