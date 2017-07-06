### 目录结构
```
.
├── .editorconfig             # 编缉器ide 规则配置
├── .eslintrc                 # 代码规则 ESLint
├── .gitignore                # git 忽略文件
├── .istanbul.yml             # 
├── .npmrc                    # 
├── README.md                 # 介绍文件.
├── dist                      # 生成生产环境文件
├── package.json              # Package 库配置文件
├── src                       # 资源代码
│   ├── actions               # Flux/Redux 的 actions 方法
│   ├── components            # React components 组件
│   ├── constants             # redux 常量文件
│   ├── containers            # 每个页面的入口文件
│   ├── favicon.ico           # favicon
│   ├── index.ejs             # Template 模板页面
│   ├── index.js              # 应用入口文件
│   ├── reducers              # Redux reducers. 状态改变方法
│   ├── store                 # Redux store 
│   ├── public                # CSS Styles, js, img 等静态文件目录
│   └── utils                 # 常用框.
├── tools                     # build 配置
│   ├── build.js              # Runs the production build
│   ├── chalkConfig.js        # 错语信息美化
│   ├── distServer.js         # 生产环境服务器
│   ├── nodeVersionCheck.js   # 确认node版本是否支持
│   ├── srcServer.js          # 开发环境服务器
│   ├── startMessage.js       # 开是运行时显示的信息
├── webpack.config.dev.js     # webpack 开发环境配置文件
└── webpack.config.prod.js    # webpack 生产环境配置文件
```

### Can you explain the folder structure?
