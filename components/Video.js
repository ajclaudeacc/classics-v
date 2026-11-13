"use client";
import { useState } from "react";
import { Play } from "./Icons";

// Shows the YouTube thumbnail first and loads the player only when clicked.
export default function Video({ id, title }) {
  const [on, setOn] = useState(false);
  return (
    <figure className="video">
      <div className="video-frame">
        {on ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" className="video-poster" onClick={() => setOn(true)} aria-label={`Play video: ${title}`}>
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" width="480" height="360" />
            <span className="video-play"><Play /></span>
          </button>
        )}
      </div>
      <figcaption>{title}</figcaption>
    </figure>
  );
}
