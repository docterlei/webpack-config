对应package中的依赖的说明
{
  "name": "webpack-config",
  "version": "1.0.0",
  "description": "",
  "private": true, //项目不会被发布
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --open",
    "build": "webpack"
  },
  "keywords": [],
  "author": "leiGuoHui",
  "license": "ISC",
  "dependencies": {
    "antd": "^3.15.2",
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  },
  "devDependencies": {
    "@babel/core": "^7.4.0", // babel核心
    "@babel/preset-env": "^7.4.2", // 用来支持es6新特性 还会自动判断环境提供相应代码
    "@babel/preset-react": "^7.0.0", // 转换react代码和jsx语法
    "babel-eslint": "^10.0.1",//--------- eslint不支持的语法它来支持如eslint的import报错。------//
    "babel-loader": "^8.0.5", // babel的加载器用来加载项目中的文件
    "babel-plugin-transform-class-properties": "^6.24.1", // 支持class类中的默认属性
    "eslint": "^5.16.0", // 配置.selintrc文件，ESLint 会查找和自动读取它们
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.2.1"
  }
}
