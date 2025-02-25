/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            { source: "/robots.txt", destination: "/api/robots" },
        ];
    },
    images:{
        domains: ['images.unsplash.com',"pixabay.com","cloud.appwrite.io"],
    },
};

export default nextConfig;
