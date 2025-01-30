/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production"

const nextConfig = {
  basePath: isProduction ? "" : "/katherinesfrench",
  // basePath: isProduction ? "/katherinesfrench" : "", NOTE: use this for local dev
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
