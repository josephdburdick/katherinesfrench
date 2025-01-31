/** @type {import('next').NextConfig} */

const useGithubPages = process.env.DEPLOY_TARGET === "github"

const nextConfig = {
  basePath: useGithubPages ? "/katherinesfrench" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
