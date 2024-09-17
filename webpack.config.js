const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  mode: "production",
  entry: { main: "./src/script.js", loger: "./src/loger.js" },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"), // Output path
    clean: true, // Clean the output directory before each build
  },
  mode: "production",
  optimization: {
    minimize: true, // Minify the output
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    hot: true, // Enable hot reloading
    open: true, // Automatically open the browser
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Path to your HTML file
      filename: "index.html",
      // Output HTML file name in the dist folder
    }),

    new MiniCssExtractPlugin({
      filename: "styles.css", // Output CSS file name in the dist folder
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};

///   need  picture  and  hascode  and  file js code

// loger dont  work

// api gatway
