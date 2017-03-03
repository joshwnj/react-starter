module.exports = {
  entry: 'src/frontend/index.js',
  output: {
    dir: 'dist',
    vendor: 'vendor.js'
  },
  packs: [
    require('./frontend-pack')
  ]
}
