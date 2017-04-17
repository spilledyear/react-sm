const path = require('path');
var CSS_PATH = path.resolve(__dirname, 'css');

const options = {
  style: true,
  libraryDirectory: 'lib',       // default: lib
  libraryName: 'antd'            // default: antd
};

module.exports = {
  entry: {
        index:path.join(__dirname, './frontend/index.js'),
        vendors: ['react','reflux','react-mixin','react-dom','jquery','echarts','antd']
  },
  output: {
        path: path.join(__dirname, './templates'),
        filename: '[name].js'
  },
  resolve: {
        alias: {
          'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['', '.js']
  },
  module: {
        loaders: [
            {
                test:/\.js?$/,
                exclude:/node_modules/,
                loader:'babel',
            },
            {
              test: /.less/,
              loader: 'style-loader!css-loader!less-loader'
            },
           { test: /\.css$/, loader: "style!css" },
           { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
           { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
           { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
           { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
  },  
  babel: {
        plugins: [['antd', options]]
  },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
}