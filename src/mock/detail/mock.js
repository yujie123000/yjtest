const Mock = require('mockjs')
// console.log(Mock);
let arr = [
  {
    id:1,
    title:"耐克Nike AIR ZOOM PEGASUS 34 男款跑鞋",
    description:"耐克运动跑鞋",
    shops:"森马官方旗舰店",
    limit_price:509,
    original_price:899,
    discount:5.7,
    imgList:[
        "https://a4.vimage1.com/upload/merchandise/pdc/544/548/464510208477548544/0/880555-001-5_218x274_70.jpg",
        "https://a2.vimage1.com/upload/merchandise/pdc/078/211/358093934211078/0/AA2172-601-5_218x274_70.jpg",
        "https://a4.vimage1.com/upload/merchandise/pdc/708/957/442273793580957708/0/749867-112-5_218x274_70.jpg",
        "https://a4.vimage1.com/upload/merchandise/pdc/104/287/298158490090287104/0/SX4703-001-5_218x274_70.jpg"
    ],
    moreImg:[
        "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-1_720x909_70.jpg",
        "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-2_720x909_70.jpg",
        "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-3_720x909_70.jpg"
    ]
  },
  {
    id:2,
    title:"耐克Nike TESSEN 女款运动鞋",
    description:"耐克女款运动鞋",
    shops:"耐克官方旗舰店",
    limit_price:483,
    original_price:549,
    discount:8.8,
    imgList:[
        "https://a2.vimage1.com/upload/merchandise/pdc/078/211/358093934211078/0/AA2172-601-5_218x274_70.jpg",
        "https://a4.vimage1.com/upload/merchandise/pdc/544/548/464510208477548544/0/880555-001-5_218x274_70.jpg",
        "https://a4.vimage1.com/upload/merchandise/pdc/708/957/442273793580957708/0/749867-112-5_218x274_70.jpg",
        "https://a4.vimage1.com/upload/merchandise/pdc/104/287/298158490090287104/0/SX4703-001-5_218x274_70.jpg"
    ],
    moreImg:[
        "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-1_720x909_70.jpg",
        "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-2_720x909_70.jpg",
        "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-3_720x909_70.jpg"
    ]
  },
  {
    id:3,
    title:"耐克Nike WMNS NIKE COURT ROYALE 女款运动板鞋",
    description:"耐克运动女款板鞋",
    shops:"亚马逊官方旗舰店",
    limit_price:399,
    original_price:499,
    discount:8,
    imgList:[
        "https://a4.vimage1.com/upload/merchandise/pdc/708/957/442273793580957708/0/749867-112-5_218x274_70.jpg",
        "https://a4.vimage1.com/upload/merchandise/pdc/544/548/464510208477548544/0/880555-001-5_218x274_70.jpg",
        "https://a2.vimage1.com/upload/merchandise/pdc/078/211/358093934211078/0/AA2172-601-5_218x274_70.jpg",
        "https://a4.vimage1.com/upload/merchandise/pdc/104/287/298158490090287104/0/SX4703-001-5_218x274_70.jpg"
    ],
    moreImg:[
        "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-1_720x909_70.jpg",
        "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-2_720x909_70.jpg",
        "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-3_720x909_70.jpg"
    ]
  },
  {
    id:4,
    title:"耐克Nike 舒爽快干 男款运动短裤",
    description:"耐克弹力透气 中性款",
    shops:"耐克官方旗舰店",
    limit_price:49,
    original_price:99,
    discount:4.9,
    imgList:[
        "https://a4.vimage1.com/upload/merchandise/pdc/104/287/298158490090287104/0/SX4703-001-5_218x274_70.jpg",
        "https://a4.vimage1.com/upload/merchandise/pdc/708/957/442273793580957708/0/749867-112-5_218x274_70.jpg",
        "https://a4.vimage1.com/upload/merchandise/pdc/544/548/464510208477548544/0/880555-001-5_218x274_70.jpg",
        "https://a2.vimage1.com/upload/merchandise/pdc/078/211/358093934211078/0/AA2172-601-5_218x274_70.jpg"
    ],
    moreImg:[
        "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-1_720x909_70.jpg",
        "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-2_720x909_70.jpg",
        "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-3_720x909_70.jpg"
    ]
  }
]
let cart = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
Mock.mock('/api/detail','post',function(config){
  // console.log(config);
  let {id} = JSON.parse(config.body)
  return arr.filter((item,index)=>item.id==id);
})
Mock.mock('/api/add','post',function(config){
  // console.log(config);
  let {id,color,num} = JSON.parse(config.body)
  // console.log({id,color,num});
  //加入后台数据 cart 里
  const cartproduct = cart.filter(item=>item.id==id)
  const arrsproduct= arr.filter(item=>item.id==id)
  // console.log(cartproduct,arrsproduct[0]);
  if(cartproduct.length){//判断 cart里有该商品么
    //判断 颜色
    if(cartproduct[0].color==color){
      cartproduct[0].num = cartproduct[0].num*1+num*1;
      localStorage.setItem('cart',JSON.stringify(cart))
      return cartproduct[0]
    }else{
      arrsproduct[0].num = num;
      arrsproduct[0].color = color;
      arrsproduct[0].checked = true;
      cart.push(arrsproduct[0])
      localStorage.setItem('cart',JSON.stringify(cart))
      return arrsproduct[0]
    }
  }else{
    arrsproduct[0].num = num;
    arrsproduct[0].color = color;
    arrsproduct[0].checked = true;
    cart.push(arrsproduct[0])
    localStorage.setItem('cart',JSON.stringify(cart))
    return arrsproduct[0]
  }
})