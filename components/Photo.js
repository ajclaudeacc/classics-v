import { cdnSrcSet, cdn } from "@/lib/site";

// Images served from the site's existing Squarespace CDN, resized per screen.
export default function Photo({ src, alt, sizes = "100vw", className = "", priority = false, width = 1500, height = 1000, widths }) {
  return (
    <img
      src={cdn(src, 1000)}
      srcSet={cdnSrcSet(src, widths)}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
