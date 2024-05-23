
/** @type {import('next').NextConfig} */

import dns from "dns"
dns.setDefaultResultOrder("ipv4first")

const nextConfig = {
    output: "standalone",
    // optimizeFonts: false,
    
};


export default nextConfig;
