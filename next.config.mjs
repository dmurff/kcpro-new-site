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
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/home-1-1",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/new-gallery",
        destination: "/hoops",
        permanent: true,
      },
      {
        source: "/gc55md",
        destination: "/gc55-md",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
