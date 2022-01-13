export function getDate(timestamp) {
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${day}/ ${month}/ ${year} - ${hour}:${minutes}`;
}
