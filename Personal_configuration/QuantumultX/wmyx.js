/*******
[rewrite_local]
^https:\/\/firebaseinstallations\.googleapis\.com\/v1\/projects url script-response-body https://raw.githubusercontent.com/omy669/omy99/main/Personal_configuration/QuantumultX/wmyx.js
[mitm] 
hostname = firebaseinstallations.googleapis.com

//hostname :firebaseinstallations.googleapis.com
//重写链接：^https:\/\/firebaseinstallations\.googleapis\.com\/v1\/projects
********/
var objc = JSON.parse($response.body);
       objc = {
  "name": "projects/1012691551496/installations/dH5UchRtgUjuvQAKBXnY2i",
  "fid": "dH5UchRtgUjuvQAKBXnY2i",
  "refreshToken": "3_AS3qfwKhBPY-X39HIT7PwhpB9eWL-hwsoUD3Fzp5aHyRK_ADs9nYdDVxWdNsnTdCaHTYh3oe_oJKpNDt_clkXg4Oiwl1WAP6gyLgq7Mx7Klufao",
  "authToken": {
    "token": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjE6MTAxMjY5MTU1MTQ5Njppb3M6NWZhYWRjZjExNzY2NTY0ZCIsImV4cCI6MTY2OTkwMDMzOCwiZmlkIjoiZEg1VWNoUnRnVWp1dlFBS0JYblkyaSIsInByb2plY3ROdW1iZXIiOjEwMTI2OTE1NTE0OTZ9.AB2LPV8wRQIgM1avYaX4y46boAEM9rb6u5SPSeugkdS3B7GY4gIA6A4CIQCSmXeEzHVXY0SY3xNSPlS-fLx0dPNWOq-d-SAGf7UCjQ",
    "expiresIn": "60000004800s"
  }
}

$done({body : JSON.stringify(objc)});
