/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async() => {
    return [
      {
        source: '/login',
        destination: '/',
        permanent:true,
      },
    ]
  }
}

module.exports = nextConfig
