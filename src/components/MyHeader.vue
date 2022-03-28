<!--
 * @Author: your name
 * @Date: 2022-03-22 08:14:17
 * @LastEditTime: 2022-03-22 09:38:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \shoppings\src\components\Header.vue
-->
<template>
  <div id="myheader">
    <div class="inputs">
      <p class="deng">登录</p>
      <input type="text" placeholder="大家都在搜" />
      <p class="erwei">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-qr-code"
          viewBox="0 0 16 16"
        >
          <path d="M2 2h2v2H2V2Z" />
          <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
          <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
          <path
            d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z"
          />
          <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
        </svg>
      </p>
    </div>
    <div class="daohang">
      <div class="daobao">
        <p @click="tuijian">今日推荐</p>
        <p @click="shishang">时尚</p>
        <p @click="meizhuang">美妆</p>
        <p @click="jiadian">家电</p>
        <p @click="jiaju">家居</p>
        <p @click="guoji">国际</p>
        <p @click="shenghuo">生活</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myheader",
  methods: {
    tuijian() {
      this.$router.push({
        path: "/tuijian",
      });
    },
    shishang() {
      this.$router.push({
        path: "/shishang",
      });
    },
    meizhuang() {
      this.$router.push({
        path: "/meizhuang",
      });
    },
    jiadian() {
      this.$router.push({
        path: "/jiadian",
      });
    },
    jiaju() {
      this.$router.push({
        path: "/jiaju",
      });
    },
    guoji() {
      this.$router.push({
        path: "/guoji",
      });
    },
    shenghuo() {
      this.$router.push({
        path: "/shenghuo",
      });
    },
  },
};
</script>

<style scoped>
#myheader {
  margin-left: -3.75rem;
  box-sizing: border-box;
  width: 7.5rem;
  font-size: 0.18rem;
  color: #5c008e;
  position: sticky;
  top: 0;
  left: 0;
  margin-top: 0rem;
}
.inputs {
  height: 0.75rem;
  background: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.25rem;
  box-sizing: border-box;
}
.inputs input {
  width: 5.3rem;
  background: #fff;
  outline: none;
  border-radius: 0.3rem;
  border: none;
  height: 0.57rem;
  padding-left: 0.6rem;
  box-sizing: border-box;
}
.erwei {
  padding-top: 0.05rem;
}
.daohang {
  width: 7.5rem;
  height: 0.7rem;
  overflow: scroll;
  background: #f7f7f7;
}
.daohang p {
  height: 100%;
  flex: 1;
  text-align: center;
  line-height: 0.7rem;
  color: #595959;
  font-size: 0.2rem;
  margin-bottom: 0;
}
.daohang p:hover {
  color: #e537b0;
  border-bottom: 2px solid #e537b0;
}
.daobao {
  width: 15rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
  height: 100%;
}
.daohang::-webkit-scrollbar {
  display: none;
}
</style>
