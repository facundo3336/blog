const POST_REQUIRED_FIELDS = ["title", "subtitle", "description"];

export function validatePost(post) {
  POST_REQUIRED_FIELDS.forEach((field) => {
    if (post[field] === "") {
      throw new Error(`Falta campo obligatorio: ` + field);
    }
  });

  if (post.title.length < 10) {
    throw new Error(`El titulo es muy corto`);
  }

  if (post.description.length < 50) {
    throw new Error(`La descripcion es muy corta`);
  }

  if (post.imageUrl.length > 0 && !validURL(post.imageUrl)) {
    throw new Error(`Url de imagen no valida`);
  }
}

export function validateComment(comment) {
  if (comment.name === "") {
    throw new Error(`Falta nombre`);
  }
  if (comment.text === "") {
    throw new Error(`Falta comentario`);
  }
}

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}
