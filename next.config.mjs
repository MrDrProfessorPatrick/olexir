/** @type {import('next').NextConfig} */
import withVideos from "next-videos";
const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default {
  ...nextConfig,
  ...withVideos(),
};
