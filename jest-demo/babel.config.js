module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
};


/**
 * npm install --save-dev babel-jest @babel/core @babel/preset-env
 * Jest 会默认读取 babel 的配置，通过 base-jest 对 ES Module 的代码进行转换为 CommonJS
 */