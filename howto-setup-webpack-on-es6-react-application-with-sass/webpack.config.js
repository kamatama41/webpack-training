module.exports = {
  entry: {
    helloWorld: [
      'webpack-dev-server/client?http://localhost:8080',
      './js/helloworld'
    ]
  },
  output: {
    filename: 'public/[name].js'
  }
};
