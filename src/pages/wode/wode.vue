<template>
  <div class="Mybox">
    <h3>我的</h3>
    <div class="login">
      <div class="title">
        <img src="../../assets/wode/login.jpg" alt="" />
        <p>{{ this.login }}</p>
        <i class="el-icon-camera"></i>
        <a style="margin-left: 3.5rem; font-size: 0.15rem" @click="tcfn"
          >退出登录</a
        >
      </div>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="func">
      <van-cell is-link @click="xinyongfn">我的信用评分</van-cell>
      <van-popup
        v-model="xinyong"
        teleport="body"
        position="top"
        class="xinyong"
        ><h4>我的信用评分</h4>
        <van-rate v-model="xingxing" color="#ffd21e" readonly />
        <p style="color: #ffd21e">100分</p>
        <p class="tishi">本月表现绝佳，主人再接再厉 — —</p>
      </van-popup>
      <van-cell is-link @click="wuliufn">我的物流信息</van-cell>
      <van-popup v-model="wuliu" teleport="body" position="top">
        <h4>物流信息</h4>
        <div class="kuaidi">
          <van-steps :active="active">
            <van-step>买家下单</van-step>
            <van-step>商家接单</van-step>
            <van-step>买家提货</van-step>
            <van-step>交易完成</van-step>
          </van-steps>
          <van-steps direction="vertical" :active="0">
            <van-step>
              <h5>【常州市】 快件已到菜鸟驿站请带好证件来取件</h5>
              <p>2016-07-11 10:00</p>
            </van-step>
            <van-step>
              <h5>【无锡市】 已到无锡集散中心正发往下一站</h5>
              <p>2016-07-10 09:30</p>
            </van-step>
            <van-step>
              <h5>快件已发货</h5>
              <p>2016-07-9 12:40</p>
            </van-step>
          </van-steps>
        </div>
      </van-popup>
      <van-cell is-link @click="lianxifn">联系人管理</van-cell>
      <van-popup v-model="lianxi" teleport="body" position="top"
        ><h4>联系人管理</h4>
        <van-contact-card type="add" />
        <p class="tishi lianxi">
          保存联系人的联系方式 能够有效的与他人取得联系哦 — —
        </p>
      </van-popup>
      <van-cell is-link @click="mimafn">密码设置</van-cell>
      <van-popup v-model="mima" teleport="body" position="top">
        <div>
          <van-password-input
            :value="value"
            :focused="showKeyboard"
            @focus="showKeyboard = true"
            :error-info="errorInfo"
          /><van-number-keyboard
            v-model="value"
            :show="showKeyboard"
            :maxlength="6"
            @blur="showKeyboard = false"
          />
        </div>

        <!-- 数字键盘 -->
      </van-popup>
      <van-cell is-link @click="anquanfn"
        ><span>安全设置</span
        ><van-switch :value="checked" @input="aa" size=".2rem"
      /></van-cell>
    </div>
    <div class="circle"> 
 <van-circle class="num" v-model="currentRate" :rate="95" :speed="100" :text="text" :color="gradientColor" />

    </div>
  </div>
</template>
<script>
import "./index.css";
import { Dialog } from "vant";
export default {
  name: "wode",
  data() {
    return {
      xinyong: false,
      wuliu: false,
      lianxi: false,
      mima: false,
      anquan: false,
      // 弹出框结束
      xingxing: 5, //星星评分
      active: 2, //订单配送
      checked: true, //开关
      login: "立即登录",
      value: "",
      showKeyboard: true,
      errorInfo: "",
       currentRate: 0,  
         gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6',
      },
    };
  },

  methods: {
    xinyongfn() {
      this.xinyong = true;
    },
    wuliufn() {
      this.wuliu = true;
    },
    lianxifn() {
      this.lianxi = true;
    },
    mimafn() {
      this.value = "";
      this.mima = true;
      this.showKeyboard = true;
    },
    anquanfn() {
      this.anquan = true;
    },
    aa(checked) {
      Dialog.confirm({
        title: "提醒",
        message: "是否切换开关？",
      })
        .then(() => {
          this.checked = checked;
        })
        .catch();
    },
    loginfn() {
      let token = localStorage.getItem("token");
      if (!token) {
        this.login = "立即登录";
      } else {
        this.login = "已登录";
      }
    },
    tcfn() {
      localStorage.clear();
      this.$router.push({
        path: "/Login",
      });
    },
  },
  created() {
    this.loginfn();
  },
  watch: {
    value(value) {
      console.log(value.length, value);
      if (value.length >= 6 && value !== "123456") {
        this.errorInfo = "密码错误";
      } else if (value == "123456") {
        this.mima = false;
        this.value = "";
      } else {
        this.errorInfo = "";
      }
    },
  },
  computed:{
    text() {
      return this.currentRate.toFixed(0) + '%';
    },
  }
};
</script>
<style scoped>
.Mybox {
  padding-bottom: 1.5rem;
}
</style>