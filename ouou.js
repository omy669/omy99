[rewrite_local]
^https:\/\/integral\.dasyibalang\.com url script-response-body https://raw.githubusercontent.com/omy669/omy99/main/ouou.js
[mitm] 
hostname = integral.dasyibalang.com

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const ouou = '/User';

if (url.indexOf(ouou) != -1) {
    obj.data.VIP = 1;
    body = JSON.stringify(obj);
}
$done({body});
