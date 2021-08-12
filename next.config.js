
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
require('dotenv').config()

dotenvLoad()

const withNextEnv = nextEnv()
module.exports = withNextEnv()

module.exports = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['a.storyblok.com'],
  },
}