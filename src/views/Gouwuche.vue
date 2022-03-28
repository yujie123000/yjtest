<template>
  <div class="card">
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
    <ul>
      <li v-for="(item, index) in rem" :key="index">
        <div class="top">
          <van-checkbox v-model="checked" icon-size="0.24rem"></van-checkbox>
          <div class="title">{{ item.shops }} ></div>
          <span>领券 | 编辑</span>
        </div>
        <div class="main">
          <img :src="item.imgList[0]" alt="" />
          <div class="info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <div class="price">
            <p>￥{{ item.limit_price }}</p>
            <span class="num">{{ item.num }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Gouwuche",
  data() {
    return {
      rem: null,
      checked: true,
    };
  },
  methods: {
    updata() {
      this.rem = JSON.parse(localStorage.getItem("cart"));
    },
  },
  created() {
    this.updata();
  },
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.card {
  background: #f7f7f7;
  width: 100vw;
  height: 100vh;
}
.inputs {
width: 100%;
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
.card ul {
  width: 7.5rem;
  box-sizing: border-box;
  padding: 0 0.33rem;
  margin-top: 0.3rem;
}
.card ul li {
  width: 100%;
  background: #fff;
  margin-bottom: 0.3rem;
  box-sizing: border-box;
}
.card ul li .top {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.6rem;
  font-size: 0.2rem;
}

.card .top span {
  color: #81848c;
}
.card ul li .top .title {
  width: 4rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: left;
}
.card .main {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0.17rem 0.2rem 0.4rem;
}
.card .main > img {
  width: 1.2rem;
  height: 1.36rem;
}
.card .main .info {
  width: 4rem;
}
.card .main .info h3 {
  font-size: 0.25rem;
  margin-bottom: 0.14rem;
}
.card .main .info p {
  font-size: 0.17rem;
  color: #7b7b7b;
}
.card .main .price {
  text-align: right;
  font-size: 0.18rem;
}
.card .main .price .num {
  color: #81848c;
  font-size: 0.14rem;
}
</style>