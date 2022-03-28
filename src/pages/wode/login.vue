<template>
  <div class="login-box">
    <h3>el后台管理系统</h3>
    <div>
      <el-form :model="formdata" :rules="rules">
        <el-form-item prop="user">
          <el-input placeholder="用户名" v-model="formdata.user"></el-input>
        </el-form-item>
        <el-form-item prop="pw">
          <el-input placeholder="密码" v-model="formdata.pw"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginfn">登录</el-button>
        </el-form-item>
      </el-form>
      <p class="tip">立即注册 | 忘记密码</p>
    </div>
  </div>
</template>
<script>
import instance from "@/api/api";
export default {
  name: "login",
  data() {
    let userfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^[a-z]\w{2,6}\w$/;
      if (rg.test(value)) return; //格式对不处理
      return callback(new Error("用户格式不对"));
    };
    let pwfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^\w{2,6}$/;
      if (rg.test(value)) return; //格式对不处理
      return callback(new Error("密码格式不对"));
    };
    return {
      formdata: {
        user: "admin",
        pw: "123456",
      },
      // 验证规则0
      rules: {
        user: [{ validator: userfn, trigger: "blur" }],
        pw: [{ validator: pwfn, trigger: "blur" }],
      },
    };
  },
  created() {
    // this.loginfn();
  },
  methods: {
    async loginfn() {
      let user = this.formdata.user;
      let pw = this.formdata.pw;
      let { data } = await instance.post("/login", {
        user,
        pw,
      });
       if (data.message === "fail") return this.$message.error("登录失败");
      if (data.seccess == "登陆成功") {
        localStorage.setItem("token", "1111");
        this.$message({
          message: "登陆成功",
          type: "success",
          duration: 2000,
          onClose: () => {
            //    登陆成功后跳转到主页
            this.$router.push({ path:"/tuijian" });
          },
        });
      }
    },
    // 登录按钮
  },
};
</script>
<style scoped>
.login-box {
  width: 3rem;
  margin: 0 auto;
  font-size: #fff;
  margin-top:1rem;
}
.el-button {
  width: 100%;
}
h3 {
  text-align: center;
  padding: 0.2rem 0;
}
.login-box {
  background: rgb(104, 104, 161);
  color: #fff;
  padding: 0 0.2rem 0.2rem 0.2rem;
}
.tip {
  text-align: center;
}
</style>