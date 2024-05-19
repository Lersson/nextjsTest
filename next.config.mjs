import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_API_LOCAL: process.env.NEXT_PUBLIC_API_LOCAL

    }
};


export default nextConfig;
