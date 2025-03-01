/** @type {import('next').NextConfig} */
import withPWA from "next-pwa"
const nextConfig = {
    distDir: "build",
    reactStrictMode: true,
    swcMinify:true,
    compiler:{
        removeConsole: process.env.NODE_ENV !=="development"
    },

    async rewrites() {
        return [
            { source: "/robots.txt", destination: "/api/robots" },
        ];
    },
    images:{
        domains: ['images.unsplash.com',"pixabay.com","cloud.appwrite.io","avatar.vercel.sh"],
    },
};

export default withPWA({dest:"public", register:true, skipWaiting:true, disable: process.env.NODE_ENV === "development"})(nextConfig);
