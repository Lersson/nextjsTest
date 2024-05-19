import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
};


export default nextConfig;
