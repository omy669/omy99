/******************************
🫧脚本名称:指尖笔记

[rewrite_local]
^http?:\/\/data\.ufbae\.com\/User\/GetUser*? url script-response-body zjbj.js


[mitm]
hostname = data.ufbae.com

*******************************/
var body=$response.body;
body = body.replace(/"sex\":0/g,'"sex":1');
body = body.replace(/"vip\":0/g,'"vip":1');
body = body.replace(/"memEndTs\":0/g,'"memEndTs":1998000000000');
body = body.replace(/"extraOss\":0/g,'"extraOss":1');
body = body.replace(/"ossSize\":0/g,'"ossSize":1');
$done(body);
