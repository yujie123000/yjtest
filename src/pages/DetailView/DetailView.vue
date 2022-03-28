<template>
  <div class="DetailView">
    <span class="cancel" @click="cancelbtn"><van-icon name="arrow-left" /></span>
    <span class="timeout">
      剩 <van-count-down :time="time" format="DD 天 HH 时" />
    </span>
    <div class="box_top">
      <div @click="showimg">
        <img class="bigimg" v-if="production.imgList" :src="production.imgList[0]" alt="" >
        <van-overlay :show="show">
          <div class="wrapper" @click.stop  @click="show=false">
            <div class="block">
              <!-- 轮播 -->
              <van-swipe :autoplay="3000" indicator-color="white" v-if="show">
                <van-swipe-item v-for="(item,index) in production.imgList" :key="index">
                  <img class="banner" :src="item" alt="">
                </van-swipe-item>
              </van-swipe>
            </div>
          </div>
        </van-overlay>
      </div>
      <div class="price">
        <span class="limit_price">￥{{production.limit_price}}</span>
        <s class="original_price">￥{{production.original_price}}</s>
        <span class="discount">{{production.discount}}折</span>
      </div>
      <div class="title">{{production.title}}</div>
      <div class="line"></div>
    </div>
    <div class="coupon">
      <!-- 优惠券单元格 -->
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />
      <!-- 优惠券列表 -->
      <van-popup         
        v-model="showList"
        round
        position="bottom"
        style="height: 90%; padding-top: 4px;"
      >
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </div>
    <div class="addcart">
      <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" @click="togouwuche"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="showPopup"/>
      <van-goods-action-button type="danger" text="立即购买" @click="showPopup" />
      </van-goods-action>
    </div>
    <div class="goods" >
      <van-popup
        v-if="production.id"
        class="goodspopup"
        v-model="showgoods"
        closeable
        position="bottom"
        :style="{ height: 'auto' }"
      >
        <div class="good">
          <div class="pic">
            <div>
              <img :src="production.imgList[0]" alt="">
            </div>
            <p>
              <span class="title">{{production.title}}</span>
              <span class="limit_price">￥{{production.limit_price}}</span>
            </p>
          </div>
          <div class="color">
            <p class="text">颜色:</p>
            <div class="select-btn">
              <span :class="{active:selectw}" @click="selectcolor(1)">白色</span>
              <span :class="{active:selectb}" @click="selectcolor(2)">黑色</span>
            </div>
          </div>
          <div class="num">
            <div>
                <span>购买数量</span>
                <van-stepper v-model="value" min="1" max="10" />
            </div>
            <p>剩余n件 每人限购m件</p>
          </div>
        </div>
        <div class="talk">
          <label for=""><span>*</span>留言</label>
          <input type="text" placeholder="请留言">
        </div>
        <div class="btn">
          <van-button type="danger" @click="addgouwuche(production.id)">加入购物车</van-button>
          <!-- 加入购物车在跳转 -->
          <van-button type="warning" @click="addtogouwuche(production.id)">立即购买</van-button>
        </div>
      </van-popup>
    </div>
  </div>
</template>
<script>
import instance from '@/api/api';
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
};
export default {
  name:"DetailView",
  props: ["imgsrc", "title", "price", "ids", "oldprice", "zhe"],
  data(){
    return{
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList:[1,2],
      production:{},
      showList:false,
      show:false,
      showgoods:false,
      selectw:true,
      selectb:false,
      value:1,
      time: 30 * 60 * 60 * 1000,
      id:this.ids*1+1
    }
  },
  created () {
    let id = this.id||1; //不能使用三目,因为0是报错的
    this.getrequest(id)
  },
  methods:{
    cancelbtn(){
      this.$router.go(-1)
    },
    togouwuche(){
      this.$router.push('/submit')
    },
    async addgouwuche(id){
      let color;
      if(this.selectw){
        color = '白色'
      }else{
        color = '黑色'
      }
      let num = this.value
      let {data} = await instance.post('/add',{id,color,num})
      // console.log(data);
      this.showgoods = false;
      // this.$emit("addcart",{data})
      // let res = await axios.post("./api/carts",data)
      // console.log(res)

    },
    addtogouwuche(id){
      //加入购物车在跳转到 /gouwuche
      this.addgouwuche(id)
      this.togouwuche()
    },
    selectcolor(v){
      if(v==1){
        this.selectw=true;
        this.selectb=false;
      }
       if(v==2){
        this.selectw=false;
        this.selectb=true;
      }
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    async getrequest(id){
      let {data} = await instance.post('/detail',{id})
      // console.log(data);
      this.production = data[0];
      // console.log(this.production);
    },
    showimg(){
      this.show = !this.show;
    },
    showPopup(){
      // console.log(1);
      this.showgoods = true
    }
  }
}
</script>
<style scoped>
.DetailView{
  width:100vw;
  height:100vh;
  position:fixed;
  top:0;
  left:0;
  z-index:1000;
  background-color:#fff;
}
.cancel{
  position:fixed;
  left:2vh;
  top:2vh;
  width:8vh;
  height:8vh;
  border-radius:50%;
  z-index:1222;
  display:flex;
  justify-content: center;
  align-items:center;
  background:rgba(0,0,0,.5);
  
}
.cancel >>> .van-icon-arrow-left:before{
  color:#fff;
  font-size:.5rem;
}
.timeout{
  position:fixed;
  width:auto;
  height:5vh;
  top:3vh;
  right:0;
  z-index:1222;
  display:flex;
  align-items:center;
  background:rgba(0,0,0,.5);
  color:#fff;
  padding:0 .2rem;
  border-radius:2.5vh 0 0 2.5vh;
}
.timeout >>> .van-count-down{
  color:#fff;
  margin-left:.2rem;
}
.box_top{
  padding:.2rem;
  position:relative;
  width:100%;
  box-sizing:border-box;
}
.bigimg{
  width:100%;
  height:50vh;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width:100vw;
}

.block {
  width: 100vw;
  /* height:50vh; */
  background-color: #fff;
}
.block >>> .van-swipe-item{
  display:flex;
  justify-content: center;
  align-content: center;
}
.price{
  height:5vh;
  display:flex;
  align-items: baseline;
}
.limit_price{
  font-size:0.4rem;
  font-weight:bolder;
  color:deeppink;
}
.original_price{
  font-size:.3rem;  
  font-weight:bolder;
  color:#ccc;
  margin:0 .2rem;
}
.discount{
  background-color:#000;
  color:#fff;
}
.line{
  height:.01rem;
  background-color:#ccc;
  margin-top:.1rem;
}
.goodspopup{
  min-height:50vh;
}
.good>div,.talk{
  padding:.2rem 0;
}

.btn{
  position:absolute;
  width:100vw;
  left:0;
  bottom:0;
  display:flex;
  align-items:stretch;
  padding:0;
}
.btn .van-button{
  flex:1;
}
.good{
  width:100vw;
  padding-left:.2rem;
  box-sizing:border-box;  
}
.good>div{
  border-bottom:.01rem solid #ccc;
}
.pic{
  width:100%;
  /* background:red; */
  display:flex;
  padding-bottom:.3rem;
}
.pic>div{
  width:15vw;
  height:15vw;
  position:relative
}
.pic>div img{
  width:100%;
  position:absolute;
  top:-.3rem;
  background: #fff;
  margin-right:.1rem;
}
.pic .title{
  width:60vw;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.pic>p{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}
.select-btn{
  display:flex;
}
.select-btn span{
  padding:.1rem;
  background-color:#ccc;
  color:#aaa;
  margin:0 .1rem;
}
.select-btn span.active{
  background:#f00;
  color:#fff;
}
.good .num{
  padding-right:.2rem;
}
.num div{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.num p{
  color:#f00;
}
.talk{
  padding-left:.1rem;
}
.talk span{
  color:#f00;
  margin-right:.1rem;
}
.talk input{
  border:0;
  outline:none;
  margin-left:.5rem;
}
</style>