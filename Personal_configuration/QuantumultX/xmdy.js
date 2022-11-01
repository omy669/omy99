/******************************

[rewrite_local]
^https?:\/\/api-miprint\.hannto\.com\/v1\/c\/user\/vip_info\/*? url script-response-body xmdy.js


[mitm]
hostname = api-miprint.hannto.com

*******************************/
var body=$response.body;
body = body.replace(/.+/g,'{"message":"success","code":"0","result":{"vip_info":[{"is_vip":1,"name":"小米打印VIP","weight":10,"vip_type":"小米打印VIP1年-offer","icon":"https://hannto-static.ks3-cn-beijing.ksyuncs.com/mi_print/vip_icon/mi_print_vip.png?width=25&height=12","type":"mi_print","end_time":1761981812}, {"is_vip":1,"name":"学而思资源包","weight":0,"vip_type":"free","icon":"https://hannto-static.ks3-cn-beijing.ksyuncs.com/mi_print/vip_icon/tal_vip.png?width=12&height=12","type":"tal","end_time":1761981812}],"user_info":{"nick_name":"测试","privacy_auth":{},"is_active":true,"id":"848484894"}}}');
$done(body);
