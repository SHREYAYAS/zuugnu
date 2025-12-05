import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <--- Add this line
  
  // If you are using the <Image> component, you might also need this:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;