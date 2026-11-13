"use client";
import { useState } from "react";
import { Play } from "./Icons";
import NearImg from "./NearImg";

// Shows the YouTube thumbnail first and loads the player only when clicked.
// hd: true when YouTube has a 1280px thumbnail (maxresdefault) for the video.
export default function Video({ id, title, hd }) {
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
            <NearImg
              src={`https://i.ytimg.com/vi/${id}/sddefault.jpg`}
              srcSet={`https://i.ytimg.com/vi/${id}/hqdefault.jpg 480w, https://i.ytimg.com/vi/${id}/sddefault.jpg 640w${hd ? `, https://i.ytimg.com/vi/${id}/maxresdefault.jpg 1280w` : ""}`}
              sizes="(min-width: 900px) 50vw, 100vw"
              alt=""
             
              width="640"
              height="480"
            />
            <span className="video-play"><Play /></span>
          </button>
        )}
      </div>
      <figcaption>{title}</figcaption>
    </figure>
  );
}
