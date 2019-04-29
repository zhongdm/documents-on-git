
1. 命令
  $ node --inspect-brk={port} **.js

2. 启动vscode中的inspect

3. 在谷歌地址栏中输入：chrome://inspect/#devices

4. 点击remote target下的inspect链接， 进入调试页面


## 方法2
1. launch.json文件中点击按钮add configuration， 添加如下配置：
```
{
    "type": "node",
    "request": "attach",
    "name": "Attach by Process ID",
    "processId": "${command:PickProcess}"
  },
```

2. 控制台中输入命令：
```
$ node --inspect=${port} **.js
```
port 可以使9229等和服务器的端口不冲突的

3. 启动绿色按钮，并刷新页面（比如路径是：localhost:3000）
