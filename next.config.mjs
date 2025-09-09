/** @type {import('next').NextConfig} */
import withVideos from "next-videos";
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default {
  ...nextConfig,
  ...withVideos(),
};
