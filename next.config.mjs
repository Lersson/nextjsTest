
/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "standalone",
    // optimizeFonts: false,

    async rewrites() {
        return [
          {
            source: '/dados',
            destination: 'https://jsonplaceholder.typicode.com/users', // The :path parameter is used here so will not be automatically passed in the query
          },
        ]
      },
    
};


export default nextConfig;
