/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production"

const nextConfig = {
  basePath: isProduction ? "/katherinesfrench" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
