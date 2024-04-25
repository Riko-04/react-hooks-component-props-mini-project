import React from "react";

function Article({ title, date, preview, minutes }) {
  // Function to generate emoji based on minutes
  const generateEmoji = (count, emoji) => {
    return Array.from({ length: count }, (_, i) => (
      <span key={i} role="img" aria-label="minutes">
        {emoji}
      </span>
    ));
  };

  // Determine emoji based on minutes
  const emoji =
    minutes < 30
      ? generateEmoji(Math.ceil(minutes / 5), "☕️")
      : generateEmoji(Math.ceil(minutes / 10), "🍱");

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <small> • {emoji} {minutes} min read</small> {/* Position emoji and minutes after the date */}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
