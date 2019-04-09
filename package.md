## 开发环境依赖 devDependencies
  
* "@babel/core": "^7.4.0"
  > babel核心
* "@babel/preset-env": "^7.4.2"
  > 用来支持es6新特性 还会自动判断环境提供相应代码
* "@babel/preset-react": "^7.0.0"
  > 转换react代码和jsx语法
* "babel-eslint": "^10.0.1"
  > eslint不支持的语法它来支持如eslint的import报错
* "babel-loader": "^8.0.5"
  > babel的加载器用来加载项目中的文件
* "babel-plugin-import": "^1.11.0"
  > 用来加载只用到到antd组件
* "babel-plugin-transform-class-properties": "^6.24.1"
  > 支持class类中的默认属性
* "clean-webpack-plugin": "^2.0.1"
  > 每次打包前，先把build目录下的文件清除
* "css-loader": "^2.1.1"
  > 用于解析cssw文件
* "eslint": "^5.16.0"
  > 配置.selintrc文件，ESLint 会查找和自动读取它们
* "eslint-config-airbnb": "^17.1.0"
  > 继承airbnb公司到eslint规范，下面这三个eslint规范是这个到依赖
    "eslint-plugin-import": "^2.16.0"
    "eslint-plugin-jsx-a11y": "^6.2.1"
    "eslint-plugin-react": "^7.12.4"
* "html-webpack-plugin": "^3.2.0"
  > 生成html插件
* "mini-css-extract-plugin": "^0.5.0"
  > 将样式抽成独立的文件
* "style-loader": "^0.23.1"
  > 将解析后的样式嵌入js代码中.最后会在header中生成一个style标签。将import引入的样式嵌入js文件中，好处是减少了请求数，坏处是样式文件很大时，造成编译的js文件也很大
* "webpack": "^4.29.6"
* "webpack-bundle-analyzer": "^3.2.0"
  > webpack打包分析器
* "webpack-cli": "^3.3.0"
  > webpack4也需要引进来
* "webpack-dev-server": "^3.2.1"


