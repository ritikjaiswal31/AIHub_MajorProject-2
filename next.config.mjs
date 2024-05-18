///** @type {import('next').NextConfig} */

/*
const nextConfig = {
    images: {
      domains: [
        "googleusercontent.com",
        "oaidalleapiprodscus.blob.core.windows.net",
        "cdn.openai.com"
      ]
    },
  }
  
  module.exports = nextConfig
  */

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      domains: [
        "oaidalleapiprodscus.blob.core.windows.net",
      ]
    }
  }

export default nextConfig