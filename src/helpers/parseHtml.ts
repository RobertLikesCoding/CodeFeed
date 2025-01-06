import DOMPurify from "dompurify";

export function parseBodyHTML(bodyHTML: string) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = bodyHTML;
  return DOMPurify.sanitize(textarea.value);
}
