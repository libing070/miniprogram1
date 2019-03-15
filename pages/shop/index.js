Page({
  data: {
    iconfontSize:{
    },
    clickId:"0",
    menudataList: [{ "index": "0", "text": "首页", "icon": "iconiconshouye" }, 
      { "index": "1", "text": "分类", "icon": "iconicon04" },
      { "index": "2", "text": "购物车", "icon": "icongouwuche" },
      { "index": "3", "text": "订单列表", "icon": "icondingdanliebiao" },
      { "index": "4", "text": "个人中心", "icon": "iconwode" }],
      imgUrls: ['1', '2', '3', '4', '5', '6', '7'],
    menuUrls1: [{ "name": "京东超市", 'img': 'chaoshi' },
     { "name": "海囤全球", 'img': 'haitunquanqiu' },
      { "name": "京东服饰", 'img': 'fushi' }, 
      { "name": "京东到家", 'img': 'daojia' },
       { "name": "充值缴费", 'img':  'jiaofei'}],
    menuUrls2: [{ "name": "9.9元拼", 'img': 'pinggou' },
     { "name": "赚钱", 'img': 'zhuanqian' }, 
     { "name": "京东物流", 'img': 'wuliu' }, 
     { "name": "领劵", 'img': 'lingjuan' },
      { "name": "京东生鲜", 'img':  'shengxian'}],
    scrollxList: [{index: '1',originalPrice: '1500', presentPrice: "799"},
      { index: '2', originalPrice: '89', presentPrice: "39.9" },
      { index: '3', originalPrice: '312', presentPrice: "199" },
      { index: '4', originalPrice: '2199', presentPrice: "1899" },
      { index: '5', originalPrice: '3600', presentPrice: "3200" },
      { index: '6', originalPrice: '16.8', presentPrice: "9.6" },
      { index: '7', originalPrice: '179', presentPrice: "69" },
      { index: '8', originalPrice: '39.9', presentPrice: "28.8" },
      { index: '9', originalPrice: '1080', presentPrice: "859" },
      { index: '10', originalPrice: '6599', presentPrice: "4999" },
      ],

    //滚动的数组
    scrolls: [
      {
        name: '黄色',
        tag: 'yellow',
      },
      {
        name: '绿色',
        tag: 'green',
      },
      {
        name: '红色',
        tag: 'red',
      },
      {
        name: '黄色',
        tag: 'yellow',
      },
      {
        name: '绿色',
        tag: 'green',
      },
      {
        name: '红色',
        tag: 'red',
      },
    ],
  },

  onLoad: function (option) {
   var that=this;
   wx.getSystemInfo({
     success: function(res) {
       if (res.model.indexOf('iPad') > -1) { 
         that.setData({ iconfontSize: 'font-size:30rpx'})//设置ipad下图标的大小
       }
     },
   })
  },
  onReady() {
  },
  changeMenuBtn(e){
    let that = this
    var cla = e.currentTarget.dataset.currindex;
    that.setData({
      'clickId': cla
    });
  }
})