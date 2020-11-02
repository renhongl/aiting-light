// pages/index/playList/playList.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playList: [],
    current: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '播放列表'
    });

    this.loadPlayList();
  },

  loadPlayList() {
    const self = this;
    wx.request({
      url: 'http://192.168.1.91:3000/playList',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        self.setData({
          playList: res.data
        });
      }
    })
  },

  changeMusic(e) {
    const current = e.currentTarget.dataset.item;
    app.globalData.current = current;
    this.setData({
      current,
    });
  }

})