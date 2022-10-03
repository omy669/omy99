[rewrite_local]
^https:\/\/apiios_dq\.xiangha\.com\/v4\/User url script-response-body https://raw.githubusercontent.com/omy669/omy99/main/ouou.js
[mitm] 
hostname = dq.xiangha.com


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const ouou = '/getUserData';

if (url.indexOf(ouou) != -1) {
    obj.vip.is_open_vip = 1;
obj.vip.is_vip = 2;
    body = JSON.stringify(obj);
}

$done({body});
