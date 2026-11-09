import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true, // matches the playbook's URL format: /about/, /services/erp-crm-development/
  poweredByHeader: false,
};

export default nextConfig;
