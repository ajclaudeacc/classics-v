/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old addresses from the current site.
      { source: "/home", destination: "/", permanent: true },
      { source: "/special-events", destination: "/#events", permanent: true },
      { source: "/photos-1", destination: "/classicsfivephotos", permanent: true },
    ];
  },
};

export default nextConfig;
