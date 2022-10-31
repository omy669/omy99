[rewrite_local]
^http?:\/\/gateway\.ergedd\.com\/dduser\/user\/center\/register|http?:\/\/gateway\.ergedd\.com\/dduser\/user\/center\/set*?url script-response-body https://raw.githubusercontent.com/omy669/omy99/main/egdd.js
[mitm]
hostname = gateway.ergedd.com,gateway.ergedd.com
*******************************/
var body=$response.body;
body = body.replace(/"vip_endtime\":\d+/g,'"vip_endtime":1919486813');
body = body.replace(/"is_vip\":\d+/g,'"is_vip":1');
body = body.replace(/"is_contract\":\d+/g,'"is_contract":1');
$done（body）；
