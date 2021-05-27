var http=require("http");
var express=require("express");
var app=express();
var path = require('path');
// 1.在app.js的头上定义ejs:
var ejs = require('ejs');
//定义变量
var tem={
  message:"我是中间部分"
};
//创建服务器
//在控制台输入node app.js启动服务器
http.createServer(app).listen(8080,function(){
  console.log("服务器地址为:http://localhost:8080");
});
//挂载静态资源处理中间件,设置css或者js引用文件的静态路径
app.use(express.static(__dirname+"/public"));
// 或者以下这个也可以
// app.use(express.static(path.join(__dirname, 'public'), {maxAge: 36000}));
//设置模板视图的目录
app.set("views","./public/views");
//设置是否启用视图编译缓存，启用将加快服务器执行效率
app.set("view cache",true);
// 2.注册html模板引擎：
app.engine('html',ejs.__express);
//设置模板引擎的格式即运用何种模板引擎
app.set("view engine","ejs");
//设置路由
app.get("/",function(req,res){
  res.render('index.html');
});

