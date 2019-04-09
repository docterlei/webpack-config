## babel配置 

* "presets": ["@babel/preset-env", "@babel/preset-react"]
  > 解析es6语法，react语法jsx
* "plugins": ["transform-class-properties"] 
  > class组件中解析属性成员
* "plugins": [["import", {"libraryName": "antd", "libraryDirectory": "es", "style": "css"}],]
  > babel-plugin-import插件的配置
