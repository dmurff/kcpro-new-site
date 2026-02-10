/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },

  async redirects() {
    return [
      { source: "/home-1", destination: "/", permanent: true },

      {
        source: "/residential",
        destination: "/services",
        permanent: true,
      },

      {
        source: "/goals",
        destination: "/hoops",
        permanent: true,
      },

      {
        source: "/basketball-goals-for-sale",
        destination: "/hoops",
        permanent: true,
      },
      {
        source: "/basketball-hoop-installation",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
