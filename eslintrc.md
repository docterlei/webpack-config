## eslint配置 

* "root": true
  >默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 package.json 文件或者 .eslintrc.* 文件里的 eslintConfig 字段下设置 "root": true。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
* "extends": "eslint:recommended"
  > 开启推荐配置信息
* "parser": "babel-eslint"
  > 配置解析es6
  
### rules  值为0关闭规则 值为1开启规则可以通过校验 值为2开启规则不可以通过校验
  
* "no-console": 1
  > 打印警告
* "import/extensions": ["ignorePackages"]
  > import引用文件带后缀警告 禁用
* "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  > 文件中有js后缀警告  禁用
* "no-undef": 0
  > 用document.getElementById警告 禁用
* "jsx-a11y/click-events-have-key-events": [0],
* "jsx-a11y/no-noninteractive-element-interactions": [0],
* "jsx-a11y/no-static-element-interactions": [0] 
  > 不是button元素时警告  禁用
  
