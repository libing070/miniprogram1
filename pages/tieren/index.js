Page({
  data: {
    current: 'tab1',
    bottomcurrent:'homepage'
  },

  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
    console.log(detail.key);
  },


  handleChange1({ detail }) {
    this.setData({
      bottomcurrent: detail.key
    });
    console.log(detail.key);
  },
});
