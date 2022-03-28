<template>
  <div class="submit">
    <!-- 返回的栏目 -->
    <van-nav-bar title="详细地址" left-text="返回">
      <template #left>
        <van-icon name="arrow-left" size="18" @click="backgrup" />
      </template>
    </van-nav-bar>

    <!-- 输入任意文本 -->
    <van-field v-model="text" label="收货人" placeholder="请输入用户名" />
    <!-- 输入手机号，调起手机号键盘 -->
    <van-field
      v-model="tel"
      type="tel"
      label="联系电话"
      placeholder="请输入手机号"
    />
    <!-- 允许输入正整数，调起纯数字键盘 -->

    <van-field
      readonly
      clickable
      name="area"
      :value="adressvalue"
      label="地区选择"
      placeholder="点击选择省市区"
      @click="showArea = true"
    />
    <van-popup v-model="showArea" position="bottom">
      <van-area
        :area-list="areaList"
        @confirm="onConfirm"
        @cancel="showArea = false"
      />
    </van-popup>
    <!-- 允许输入数字，调起带符号的纯数字键盘 -->
    <van-field
      v-model="adress"
      type="tel"
      label="详细地址"
      placeholder="如街道，楼层，门牌号等"
    />
    <!-- 输入密码 -->
    <van-field
      v-model="text1"
      type="tel"
      label="邮政编码"
      placeholder="邮政编码（选填）"
    />
    <div class="flag">
      <p>设为默认收获地址</p>
      <van-switch v-model="value" size="0.5rem" />
    </div>
    <button class="save" @click="saves">保存</button>
    <button class="delete">删除收获地址</button>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>


<script>
import { areaList } from "../assets/ditu";
import { Toast } from "vant";
export default {
  name: "SubmitOrder",
  data() {
    return {
      show: false,
      indexdata: null,
      value: true,
      areaList: areaList,
      ditu: null,

      tel: "",
      adressvalue: "",
      showArea: false,
      text: "",
      text1: "",
      adress: "",
    };
  },

  methods: {
    onConfirm(values) {
      this.adressvalue = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea = false;
    },
    saves() {
      Toast("保存成功");
    },
    onSubmit() {
      this.$router.go(-1);
    },
    backgrup() {
      this.$router.back();
    },
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.submit {
  width: 7.5rem;
  box-sizing: border-box;
  padding: 0.15rem 0.45rem 0;
  background: #f9f9f9;
  height: 100vh;
  box-sizing: border-box;
}
.van-cell {
  height: 0.7rem;
  font-size: 0.22rem;
  line-height: 0.5rem;
}
.flag {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.8rem;
  background: #fff;
}

.flag p {
  font-size: 0.22rem;
  margin-left: 0.47rem;
}
.flag .van-switch {
  margin-right: 0.2rem;
}
.save {
  width: 6.4rem;
  height: 0.72rem;
  background: #00c500;
  font-size: 0.22rem;
  border: none;
  color: white;
  margin: 0.31rem 0.15rem 0.18rem;
  box-sizing: border-box;
}
.delete {
  color: black;
  font-size: 0.24rem;
  width: 6.4rem;
  height: 0.72rem;
  border: 3px solid #efefef;
  margin: 0 0.15rem;
  box-sizing: border-box;
  background: #fff;
}
</style>