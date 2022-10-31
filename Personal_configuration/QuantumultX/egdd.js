/*******************************
[rewrite_local]
^http?:\/\/gateway\.ergedd\.com\/dduser\/user\/center\/register|http?:\/\/gateway\.ergedd\.com\/dduser\/user\/center\/set*?url script-response-body https://raw.githubusercontent.com/omy669/omy99/main/egdd.js
[mitm]
hostname = gateway.ergedd.com,gateway.ergedd.com
*******************************/
var%20body%3D%24response.body%3B%0D%0Abody%20%3D%20body.replace%28%2F%22vip%5Fendtime%5C%22%3A%5Cd%2B%2Fg%2C%27%22vip%5Fendtime%22%3A1919486813%27%29%3B%0D%0Abody%20%3D%20body.replace%28%2F%22is%5Fvip%5C%22%3A%5Cd%2B%2Fg%2C%27%22is%5Fvip%22%3A1%27%29%3B%0D%0Abody%20%3D%20body.replace%28%2F%22is%5Fcontract%5C%22%3A%5Cd%2B%2Fg%2C%27%22is%5Fcontract%22%3A1%27%29%3B%0D%0A%24done%28body%29%3B
