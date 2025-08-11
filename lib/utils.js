export function formatDate(dateString) {
  // format date nicely
  // example: from 2025-05-20 to  May 20, 2025
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
