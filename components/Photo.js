import { cdnSrcSet, cdn } from "@/lib/site";
import NearImg from "./NearImg";

// Images served from the site's existing Squarespace CDN, resized per screen.
export default function Photo({ src, alt, sizes = "100vw", className = "", priority = false, width = 1500, height = 1000, widths }) {
  if (!priority) {
    return <NearImg src={cdn(src, 1000)} srcSet={cdnSrcSet(src, widths)} sizes={sizes} alt={alt} width={width} height={height} className={className} />;
  }
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
