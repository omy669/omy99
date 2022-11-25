/************
[rewrite_local]
^http[s]:\/\/api\.528529\.com\/apple_product url script-response-body wf.js
[mitm] 
hostname = api.528529.com
************/

var objc = JSON.parse($response.body);
    objc = 
{"code": 1, "msg": "success", "data": [{"vip_type": "vip_free_test", "due_time": "2099-11-28 14:51:02", "in_app": "[{\"quantity\": \"1\", \"product_id\": \"vip_1_year_auto\", \"transaction_id\": \"30001447837085\", \"original_transaction_id\": \"30001447837085\", \"purchase_date\": \"2022-11-25 06:51:02 Etc/GMT\", \"purchase_date_ms\": \"1669359062000\", \"purchase_date_pst\": \"2022-11-24 22:51:02 America/Los_Angeles\", \"original_purchase_date\": \"2022-11-25 06:51:04 Etc/GMT\", \"original_purchase_date_ms\": \"1669359064000\", \"original_purchase_date_pst\": \"2022-11-24 22:51:04 America/Los_Angeles\", \"expires_date\": \"2099-11-28 06:51:02 Etc/GMT\", \"expires_date_ms\": \"4099243862000\", \"expires_date_pst\": \"2099-11-27 22:51:02 America/Los_Angeles\", \"web_order_line_item_id\": \"30000640939665\", \"is_trial_period\": \"true\", \"is_in_intro_offer_period\": \"true\", \"in_app_ownership_type\": \"PURCHASED\"}]", "now_time": "2022-11-25 14:51:07", "isExpire": false, "isExist": true}]}

$done({body : JSON.stringify(objc)});
