const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "src/app.jsx"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.js",
    assetModuleFilename: "[name][ext]",
    clean: true,
    publicPath: "/",
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  devServer: {
    port: 5555,
    compress: true,
    open: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "My web Page",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
