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
      { "name": "京东生鲜", 'img':  'shengxian'}]
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