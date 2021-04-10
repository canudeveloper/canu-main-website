/* eslint-disable no-param-reassign */

module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' }
    }

    return config
  },
}
