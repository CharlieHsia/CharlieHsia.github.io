- **步骤 1:** 创建并进入一个目录

  ```
  $ mkdir vitepress-starter && cd vitepress-starter
  ```

- **步骤 2:** 初始化

  ```
  $ yarn init
  ```

- **步骤 3:** 本地安装 VitePress

  ```
  $ yarn add --dev vitepress
  ```

- **步骤 4:** 创建你第一篇文档

  ```
  $ mkdir docs && echo '# Hello VitePress' > docs/index.md
  ```

- **步骤 5:** 在 `package.json`.添加一些`script`

  ```
  {
    "scripts": {
      "docs:dev": "vitepress dev docs",
      "docs:build": "vitepress build docs",
      "docs:serve": "vitepress serve docs"
    }
  }
  ```

- **步骤 6:** 在本地服务器上启动文档站点

  ```
  $ yarn docs:dev
  ```

<!-- https://github.com/Kenshin/gnvm

下载完gnvm，将其移动到nodejs文件夹下面

打开命令行，

gnvm v

gnvm update latest -->