/******************************
⚠️如果放远程，请把biansheng.js替换成运程链接⚠️
🫧脚本名称:测试变声吧
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************

[rewrite_local]
^http?:\/\/voicechanger\.szsszykj\.com\/interface\/GetIosVip\.php*? url script-response-body biansheng.js


[mitm]
hostname = voicechanger.szsszykj.com

*******************************/
var body=$response.body;
body = body.replace(/"end_time\":".*?"/g,'"end_time":"2030-11-04 17:00:38"');
body = body.replace(/"is_vip\":0/g,'"is_vip":1');
$done(body);