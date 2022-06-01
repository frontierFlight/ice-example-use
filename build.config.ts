module.exports = {
  // mpa: true,
  publicPath: './',
  alias: {
    // '@': './src/',
  },
  vite: true,
  fastRefresh: true,
  define: { // 全局变量
    env: process.env.NODE_ENV,
  },
  plugins: [
    ['build-plugin-ignore-style', {
      libraryName: 'antd',
    }],
  ],
  // 根据命令行设置参数进行不同的环境配置
  modeConfig: {
    dev: {

    },
    prod: {
      //
    },
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
  },
};
