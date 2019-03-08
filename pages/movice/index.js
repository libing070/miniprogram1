let DEBUG = true;//切换数据入口
var Mock = require('../../utils/mock-min.js')

Page({
  data: {
    tableData: []
  },
  onLoad: function (option) {
    this.getEasyMockData(DEBUG);
  },
  onReady() {

  },
  getEasyMockData(DEBUG) {
    var that = this;//=====注意此处，要用that 指代this=====
    //mock模拟数据
    if (DEBUG) {
      // 模拟数据
      var res = Mock.mock({
        'error_code': '',
        'error_msg': '',
        'data|20': [{
          'id|+1': 1,
          'img|1-10': 1,
          'title': '@ctitle(3,8)',
          'penfen|1-10.1': 1,
          'daoyan': '@cname()',
          'zhuyan': '@cname()',

          // 'img': "@image('200x100', '#4A7BF7','#fff','pic')",
          // 'title': '@ctitle(3,8)',
          // 'city': "@county(true)",
          // 'stock_num': '@integer(0,100)',//库存数量  
          // 'marketing_start': '@datetime()',
          // 'marketing_stop': '@now()',
          // 'price': '@integer(100,2000)',//现价，单位：分  
          // 'original_price': '@integer(100,3000)'
        }]
      })
      that.setData({ //======不能直接写this.setDate======
        tableData: res.data, //在相应的wxml页面显示接收到的数据
      });
      // 输出结果
      console.log(JSON.stringify(res, null, 2))
    } else {
      var that = this;//=====注意此处，要用that 指代this=====
      wx.request({
        url: 'https://www.easy-mock.com/mock/5af95a1955139c3813192b54/cmca/sjcx/getSortTableList', //服务器地址
        method: 'get',// OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        data: {
        },
        header: {// 设置请求的 header
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data.tableData);
          that.setData({ //======不能直接写this.setDate======
            tableData: res.data.tableData, //在相应的wxml页面显示接收到的数据
          });
        }
      })
    }
  }
})