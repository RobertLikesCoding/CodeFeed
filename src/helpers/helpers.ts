import DOMPurify from "dompurify";

export function parseBodyHTML(bodyHTML: string) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = bodyHTML;
  return DOMPurify.sanitize(textarea.value);
}

export function parseTimestamp(timestamp: number): string {
  const inMilliseconds = timestamp * 1000;
  const milSecondsPassed = Date.now() - inMilliseconds;

  const minutes = Math.round(milSecondsPassed / (1000 * 60));
  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  const hours = Math.round(minutes / 60);
  if (hours < 24) {
    return `${hours}h ago`;
  }

  const days = Math.round(hours / 24);
  if (days < 7) {
    return `${days}d ago`;
  }

  const weeks = Math.round(days / 7);
  if (weeks < 4) {
    return `${weeks}w ago`;
  }

  const months = Math.round(days / 30);
  if (months < 12) {
    return `${months}mon ago`;
  }

  const years = Math.round(days / 365);
  return `${years}y ago`;
}
