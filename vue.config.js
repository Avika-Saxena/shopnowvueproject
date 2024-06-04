module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://139.5.189.24:8090/api/products/'
      }
    }
  }
}