import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/docs/',
    head:[
        ['link', { rel: 'icon', href: '/logo_favicon.ico' }]
    ],
    titleTemplate:false,
    title: "乾境",
    description: '南京乾境软件',
    themeConfig: {
        siteTitle: "乾境软件",
        logo: "/logo.png",
        nav: [
            { text: "首页", link: "/index.md" },
            { text: "官网", link: "https://njqjrj.com/" },
            { text: "Gogs", link: "http://192.168.2.100:3000" },
            { text: "指南", 
                items: [
                    
                    {
                        items:[
                            { text: '操作说明', link:  "/guide/OI/文档操作.md"  },
                        ]
                    },
                    {
                        items:[
                            { text: '技术文档', link: '/guide/TD/knowledge.md'},
                        ]
                    },
                    
                ]
        
            },
          ],
          
          
          
          socialLinks: [
            { icon: "github", link: "https://github.com/" }
          ],
      
          sidebar: {
            "/files/":[
              {
                text: "？？？API接口",
                collapsible: true,
                // collapsed: true,
                // 配置可折叠侧边栏只需将collapsible设置为true即可,默认初始页面是全部展开页面，
                // 如果你需要关闭状态只需要将collapsed设置为true
                items: [
                  {
                    text: "？？？",
                    link: "/files/8511API/ganraoApi.md",
                  },
                  {
                    text: "？？？",
                    link: "/files/8511API/wuyuanApi.md",
                  }
                ]
              },
              {
                text: "百度地图API接口",
                collapsible: true,
                items: [
                  {
                    text: "百度地图API",
                    link: "/files/yigoAPI/yigouApi.md",
                  },
                ]
              },
            ],
            // "/files/yigoAPI/":[
            //   {
            //     text: "异构API接口",
            //     collapsible: true,
            //     items: [
            //       {
            //         text: "异构加速软件API",
            //         link: "/files/yigoAPI/yigouApi.md",
            //       },
            //     ]
            //   },
            // ],
            // "/files/8511API/":[
            //   {
            //     text: "8511API接口",
            //     collapsible: true,
                // collapsed: true,
                // 配置可折叠侧边栏只需将collapsible设置为true即可,默认初始页面是全部展开页面，
                // 如果你需要关闭状态只需要将collapsed设置为true
            //     items: [
            //       {
            //         text: "干扰",
            //         link: "/files/8511API/ganraoApi.md",
            //       },
            //       {
            //         text: "无源定位",
            //         link: "/files/8511API/wuyuanApi.md",
            //       }
            //     ]
            //   },
            // ],
            "/guide/TD/":[
              {
                text: "知识笔记",
                items: [
                  {
                    text: "搭建过程",
                   
                    link: "/guide/TD/knowledge.md",
                  },
                ],
              },
              {
                text: "技术突破",
                items: [
                  {
                    text: "访问中断",
                   
                    link: "/guide/TD/访问中断.md",
                  },
                  {
                    text: "网页名显示两次",
                   
                    link: "/guide/TD/网页名显示两次.md",
                  },
                ],
              },
            ],
            "/guide/OI/": [
              {
                items:[
                  // {
                  //   text: "基本操作",
                  //   link: "/guide/OI/基本布局.md",
                    // items: [
                    //   {
                    //     text: "基本布局",
                    //     link: "/guide/OI/基本布局.md",
                    //   },
                    //   {
                    //     text: "文档操作",
                    //     link: "/guide/OI/文档操作.md",
                    //   }
                    // ],
                  // },
                  {
                    text: "文档操作",
                    link: "/guide/OI/文档操作.md",
                  },
                  {
                    text: "基本布局",
                    link: "/guide/OI/基本布局.md",
                  },
                   {
                    text: "文件结构",
                    link: "/guide/OI/文件结构.md",
                  },
                ]
              }
             
            ],
          },



    },
   
    
   




})
// module.exports = {
//     base: '/docs/',
//     title: 'Hello VitePress',
//     description: 'Just playing around.'
//   }