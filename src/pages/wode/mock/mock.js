let Mock = require("mockjs")
Mock.mock('/api/login', "post", function (config) {
    let data = JSON.parse(config.body)
    let user = data.user
    let pw = data.pw
    if (user == "admin" && pw == "123456"){
        return {
            seccess: "登陆成功",
            token: 1111
        }
    } else{
        return {
            message:"fail",
        }

    }
})