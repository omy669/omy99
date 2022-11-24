/******
[rewrite_local]
^https:\/\/diary-id\.sumi\.io\/api\/profile url script-response-body https://raw.githubusercontent.com/omy669/omy99/main/Personal_configuration/QuantumultX/gezhi.js
[mitm] 
hostname = diary-id.sumi.io
*******/

var objc = JSON.parse($response.body);
       objc = {"data":{
    "avatar":"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erzu55akkolicwWA50Vib4vE8Asu8qb0AFHPNNwxzZp90rEo6NdQ0NDMCIHetcLU52zW5iaCzuC2ktEA/132",
    "inserted_at":"2022-11-24T12:21:50.644912",
    "email_is_valid":false,
    "id":"eec34ba9-f379-47a6-98c4-c13221a4f5c8",
    "expires_at":"2099-11-27T12:22:15.000000",
    "has_stripe_account":true,
    "name":"My.",
    "email":"",
    "membership_status":"premium",
    "db_version":1,
    "active_device_ids":[
    ]
  }
}

$done({body : JSON.stringify(objc)});
