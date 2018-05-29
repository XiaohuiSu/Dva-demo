# Dva-demo

## 项目初始化
$ npm install 
>安装全部依赖，包括生产依赖和开发依赖

## 运行项目
$ npm start
>可以在package.json中设置开放的端口号

## 项目说明
1. React Component UI
两个子组件Square和Board分别在 src/components/下
2. model： 'game'
state和reducer函数都在src/models/game.js
3. 父组件、Action、dispatch
在src/routes/Game/ 下
4. 路由表
5. npm start
>判断胜负的方法在src/function中，各个组件相应的样式在同级目录下

## demo功能说明
1. 三子连珠算一方获胜
2. 可以查看下棋步骤和悔棋
3. 一方获胜之后终止游戏


**本实例主要是用来熟悉Dva整个框架的使用**