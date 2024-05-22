export default function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDay()).padStart(2, "0");
  return `${y}/${m}/${d}`;
}
