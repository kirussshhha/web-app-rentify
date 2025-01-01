import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dsihiuucmpqrxbsanxyw.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
