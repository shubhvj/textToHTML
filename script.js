function contentToHtml(text) {
  return text
    .split("\n\n")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}
