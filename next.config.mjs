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
        destination: "/services/full-installation",
        permanent: false,
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
        permanent: false,
      },
      {
        source: "/gc55md",
        destination: "/hoops/gc55-md",
        permanent: true,
      },
      {
        source: "/tpt553md",
        destination: "/hoops/tpt553-lg",
        permanent: false,
      },
      {
        source: "/tpt553lg",
        destination: "/hoops/tpt553-lg",
        permanent: true,
      },
      {
        source: "/gc55lg",
        destination: "/hoops/gc55-lg",
        permanent: true,
      },
      {
        source: "/fc664xl",
        destination: "/hoops/fch664-xl",
        permanent: true,
      },
      {
        source: "/fc684xxl",
        destination: "/hoops/fch684-xxl",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
