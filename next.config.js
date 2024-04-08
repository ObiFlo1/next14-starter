/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;

// this up above is just an example if we wanted to add images from webpages because in next JS it only allows you to have images as long as the img is saved in the public folder. but if not you have to do this. but this is not necessary for this project. its just an example of what you would have to do if you wanted to get pictures from websites .
