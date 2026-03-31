import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "pakkiana";
const basePath = isProduction ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
