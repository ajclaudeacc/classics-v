"use client";
import { useEffect, useRef, useState } from "react";

// Loads a photo only when it is about one screen away. The browser's own lazy loading starts
// far ahead on slow connections, which made the page's top photo wait behind 20 gallery photos.
export default function NearImg({ eager, src, srcSet, ...rest }) {
  const ref = useRef(null);
  const [near, setNear] = useState(eager);
  useEffect(() => {
    if (near) return;
    const el = ref.current;
    if (!("IntersectionObserver" in window)) return setNear(true);
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setNear(true); io.disconnect(); }
    }, { rootMargin: "600px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [near]);
  return <img ref={ref} src={near ? src : undefined} srcSet={near ? srcSet : undefined} loading="lazy" decoding="async" {...rest} />;
}

