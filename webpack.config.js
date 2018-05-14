const path = require('path')

module.exports = {
  mode: "production",
  entry: "./src/browser/ckies.ts",
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'ckies.min.js',
    library: 'ckies',
    libraryTarget: 'window'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.browser.json'
          }
        }
      }
    ]
  }
}
