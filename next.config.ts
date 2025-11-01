/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID,
  },
};

export default nextConfig;
