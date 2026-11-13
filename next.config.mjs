/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old addresses from the current site.
      { source: "/home", destination: "/", permanent: true },
      { source: "/special-events", destination: "/#events-title", permanent: false },
      { source: "/photos-1", destination: "/classicsfivephotos", permanent: false },
    ];
  },
};

export default nextConfig;
