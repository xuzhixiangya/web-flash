(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{160:function(e,t,r){e.exports=r.p+"assets/img/vuejs.acef3378.gif"},161:function(e,t,r){e.exports=r.p+"assets/img/flash-mobile.4e32d562.gif"},184:function(e,t,r){e.exports=r.p+"assets/img/haike.195db1e6.jpg"},218:function(e,t,r){"use strict";r.r(t);var a=r(6),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/spring-projects/spring-boot",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/spring--boot-2.1.1.1.RELEASE-brightgreen",alt:"Spring Boot"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/vuejs/vue",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/vue-2.6.10-brightgreen.svg",alt:"vue"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/enilu/web-flash/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/github/license/mashape/apistatus.svg",alt:"license"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/enilu/web-flash/releases",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/github/release/enilu/web-flash.svg",alt:"GitHub release"}}),a("OutboundLink")],1),e._v(" "),a("RouterLink",{attrs:{to:"/donate.html"}},[a("img",{attrs:{src:"https://img.shields.io/badge/%24-donate-ff69b4.svg",alt:"donate"}})]),e._v(" "),a("a",{attrs:{href:"https://gitee.com/enilu/web-flash",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://gitee.com/enilu/web-flash/badge/star.svg?theme=social",alt:"Gitee stars"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/enilu/web-flash",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/github/stars/enilu/web-flash.svg?style=social&label=Stars",alt:"GitHub stars"}}),a("OutboundLink")],1)],1),e._v(" "),a("p",[e._v("本文档以向导的方式引导用户使用web-flash系统做二次开发，\nweb-flash项目本身有readme文件，如果你有丰富的spring boot的和vuejs的开发经验，那么基本上你是用不上本文档了，\n有什么问题直接看代码即可。大多数功能都可以参考代码，即使找不到的google和百度也能帮到你。")]),e._v(" "),a("p",[e._v("但是考虑到有的开发者可能初次使用上述组件，有的甚至刚接触java不久，那么本文当将引导你一步步使用本系统搭建一个后台管理系统，并在此基础上做二次开发。")]),e._v(" "),a("h2",{attrs:{id:"版本说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本说明"}},[e._v("#")]),e._v(" 版本说明")]),e._v(" "),a("ul",[a("li",[e._v("web-flash提供了一个后台管理系统和前端h5站点系统")]),e._v(" "),a("li",[e._v("web-flash是一个基于"),a("a",{attrs:{href:"https://spring.io/projects/spring-boot/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Boot"),a("OutboundLink")],1),e._v("和"),a("a",{attrs:{href:"https://cn.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js"),a("OutboundLink")],1),e._v("的web系统，包含了基于"),a("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN",target:"_blank",rel:"noopener noreferrer"}},[e._v("element"),a("OutboundLink")],1),e._v("搭建的后台管理系统和基于"),a("a",{attrs:{href:"https://vux.li",target:"_blank",rel:"noopener noreferrer"}},[e._v("vux"),a("OutboundLink")],1),e._v("搭建的手机端h5站点")]),e._v(" "),a("li",[e._v("web-flash具备后台管理类系统的通用的基础功能，而且提供了基于idea intellij的的代码生成插件，可以一键生成后台代码（service,dao,controller)和管理系统（flash-vue-admin)的前端界面。")])]),e._v(" "),a("h2",{attrs:{id:"目录说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录说明"}},[e._v("#")]),e._v(" 目录说明")]),e._v(" "),a("ul",[a("li",[e._v("flash-api 后台api服务")]),e._v(" "),a("li",[e._v("flash-vue-admin 基于vuejs的前端界面")]),e._v(" "),a("li",[e._v("flash-vue-h5 移动端内容系统，基于后台管理CMS内容管理模块的内容进行展示。")]),e._v(" "),a("li",[e._v("flash-core 基础模块，包括工具类，dao，service，bean等内容")]),e._v(" "),a("li",[e._v("flash-generator 代码生成模块，IDEA插件需要配合该模块进行代码生成，如果在代码生成方面你有什么特殊需求，可以直接调整该模块")])]),e._v(" "),a("h2",{attrs:{id:"演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#演示"}},[e._v("#")]),e._v(" 演示")]),e._v(" "),a("ul",[a("li",[e._v("后台管理(vue版本) "),a("a",{attrs:{href:"http://flash-admin.enilu.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://flash-admin.enilu.cn"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("手机端 "),a("a",{attrs:{href:"http://flash-mobile.enilu.cn/#/index",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://flash-mobile.enilu.cn/#/index"),a("OutboundLink")],1),e._v(" 打开浏览器后使用debug模式的手机视图模式浏览")]),e._v(" "),a("li",[a("strong",[e._v("建议")]),e._v(" 开发之前先将上面两个演示系统的功能查看一遍，这样后续开发可以知道参考哪些功能；演示系统为方便演示给出的权限比较大。过程中请请温柔操作，不要随意删改关键数据。")])]),e._v(" "),a("h2",{attrs:{id:"技术选型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术选型"}},[e._v("#")]),e._v(" 技术选型")]),e._v(" "),a("ul",[a("li",[e._v("核心框架：Spring Boot 2")]),e._v(" "),a("li",[e._v("数据库层：Spring data jpa")]),e._v(" "),a("li",[e._v("权限认证：Shiro+Jwt")]),e._v(" "),a("li",[e._v("数据库连接池：Druid")]),e._v(" "),a("li",[e._v("缓存：Ehcache")]),e._v(" "),a("li",[e._v("前端：基于Vue.js的element和vux")])]),e._v(" "),a("h2",{attrs:{id:"包含的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包含的功能"}},[e._v("#")]),e._v(" 包含的功能")]),e._v(" "),a("p",[e._v("web-flash包含了成熟的后台管理功能和手机端h5内容站点系统")]),e._v(" "),a("ul",[a("li",[e._v("部门管理")]),e._v(" "),a("li",[e._v("用户管理")]),e._v(" "),a("li",[e._v("角色管理")]),e._v(" "),a("li",[e._v("菜单管理：配置菜单功能")]),e._v(" "),a("li",[e._v("权限分配：为指定的角色配置特定的功能菜单")]),e._v(" "),a("li",[e._v("参数管理：维护系统参数，并缓存系统参数提供高效的读取")]),e._v(" "),a("li",[e._v("数据字典管理：配置维护数据字典")]),e._v(" "),a("li",[e._v("定时任务管理：编写、配置、执行定时任务")]),e._v(" "),a("li",[e._v("业务日志：通过注解的方式记录用户操作日志，并提供日志查询功能")]),e._v(" "),a("li",[e._v("登录日志：查看用户登录登出日志")]),e._v(" "),a("li",[e._v("cms内容管理，配合flash-vue-h5提供了手机端内容展示系统")]),e._v(" "),a("li",[e._v("消息管理：配置消息模板，发送短信，邮件消息")]),e._v(" "),a("li",[e._v("基于idea插件的代码生成")])]),e._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("ul",[a("li",[e._v("克隆本项目")]),e._v(" "),a("li",[e._v("导入idea或者eclipse")]),e._v(" "),a("li",[e._v("创建数据库：web-flash")]),e._v(" "),a("li",[e._v("在开发环境中配置了系统启动后自动创建数据库和初始化数据，所以不需要开发人员手动初始化数据库")]),e._v(" "),a("li",[e._v("确保开发工具下载了"),a("a",{attrs:{href:"https://www.zhihu.com/question/42348457",target:"_blank",rel:"noopener noreferrer"}},[e._v("lombok"),a("OutboundLink")],1),e._v("插件")]),e._v(" "),a("li",[e._v("修改flash-api中数据库连接配置")]),e._v(" "),a("li",[e._v("启动flash-api，访问http://localhost:8082/swagger-ui.html，保证api服务启动成功")]),e._v(" "),a("li",[e._v("进入flash-vue-admin目录\n"),a("ul",[a("li",[e._v("运行 npm install --registry=https://registry.npm.taobao.org 安装依赖")]),e._v(" "),a("li",[e._v("运行npm run dev 启动项目")]),e._v(" "),a("li",[e._v("启动成功后访问 http://localhost:9528,登录，用户名密码:admin/admin")])])]),e._v(" "),a("li",[a("img",{attrs:{src:r(160),alt:"vue"}})]),e._v(" "),a("li",[e._v("进入flash-vue-h5目录\n"),a("ul",[a("li",[e._v("运行 npm install --registry=https://registry.npm.taobao.org")]),e._v(" "),a("li",[e._v("运行npm run dev")]),e._v(" "),a("li",[e._v("启动成功后访问 http://localhost:8088/#/index")])])]),e._v(" "),a("li",[e._v("手机端运行效果图：\n"),a("img",{attrs:{src:r(161),alt:"mobile"}})])]),e._v(" "),a("h2",{attrs:{id:"在线文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在线文档"}},[e._v("#")]),e._v(" 在线文档")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://enilu.github.io/web-flash",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://enilu.github.io/web-flash"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("国内加速版："),a("a",{attrs:{href:"http://enilu.gitee.io/web-flash",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://enilu.gitee.io/web-flash"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交流"}},[e._v("#")]),e._v(" 交流")]),e._v(" "),a("ul",[a("li",[e._v("Bugs: "),a("a",{attrs:{href:"https://github.com/enilu/web-flash/issues/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issues"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Gitter: "),a("a",{attrs:{href:"https://gitter.im/web-flash/community",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitter channel"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("关注公众号：嗨客帝国，点击对应的项目菜单进群交流。")])]),e._v(" "),a("p",[a("img",{attrs:{src:r(184),alt:"公众号二维码"}})]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://enilu.gitee.io/web-flash/other/xiaomiquan.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("问答社区"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("也欢迎你给该项目点个赞：")]),e._v(" "),a("ul",[a("li",[e._v("Github:"),a("a",{attrs:{href:"https://github.com/enilu/web-flash",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/enilu/web-flash"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Gitee: "),a("a",{attrs:{href:"https://gitee.com/enilu/web-flash",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gitee.com/enilu/web-flash"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);