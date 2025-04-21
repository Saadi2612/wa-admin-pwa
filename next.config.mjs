/** @type {import('next').NextConfig} */

import withPWA from '@ducanh2912/next-pwa';

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "production",
    }
};

export default withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === "development",
})(nextConfig);
