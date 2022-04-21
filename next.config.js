/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "cdn.discordapp.com",
      "lh3.googleusercontent.com",
      "media-exp1.licdn.com",
      "pbs.twimg.com",
      "platform-lookaside.fbsbx.com",
      "scontent-cdt1-1.xx.fbcdn.net",
      "secure.gravatar.com",
      "static-cdn.jtvnw.net",
    ],
  },
};

module.exports = nextConfig;
