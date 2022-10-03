var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
obj = {
  "msg" : "成功",
  "data" : {
    "TestType" : "4301",
    "MembersBeginDateMs" : null,
    "RegisterTs" : "1664790001697",
    "GzhOpenId" : null,
    "AppleId" : null,
    "Sex" : 0,
    "Integral" : 0,
    "WxOpenId" : null,
    "Mobile" : null,
    "NickName" : "My.",
    "UnionId" : "o5YYFwHiYNN8K4taZ_dR5pNA7VU0",
    "DiscountEnd2" : null,
    "VIP" : 1,
    "DiscountEnd1" : null,
    "DeviceToken" : null,
    "ID" : 2374535,
    "SNSPlatform" : "WX",
    "Photo" : "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epibiczGkwFxxEtIJgYJtg9Qnp0Ojjb0icD0YfyiaHbxyu1hIr9V93tGjTJAiamNfOR0daCraMJwH7mBAA/132",
    "TrialEndDateMs" : null,
    "OpenId" : "onAxy5__m7iaf-xODGFpbrtrIJwE",
    "Amount" : "0.00",
    "InviteCode" : null,
    "MembersEndDateMs" : null
  },
  "code" : "10000"
}
    body = JSON.stringify(obj);
$done({body});
