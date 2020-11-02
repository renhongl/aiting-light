//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
    recommend: [],
    fashion: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 10000,
    duration: 500,
    current: {
      name: 'test',
      author: 'test',
      src: 'http://192.168.1.91:3000/musics/王菲 - 紅豆.mp3',
      poster: 'http://192.168.1.91:3000/images/l1.jpg'
    }
  },

  onReady: function (e) {
    
  },

  onShow: function(e) {
    this.setData({
      current: app.globalData.old,
    });
  },

  onLoad() {
    this.loadRecommend();
    this.loadFashion();
  },

  loadRecommend() {
    let self = this;
    wx.request({
      url: 'http://192.168.1.91:3000/recommend',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        self.setData({
          recommend: res.data
        });
      }
    })
  },

  loadFashion() {
    let self = this;
    wx.request({
      url: 'http://192.168.1.91:3000/fashion',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        self.setData({
          fashion: res.data
        });

        
      }
    })
  },

  play() {
    this.innerAudioContext.src = 'http://192.168.1.91:3000/musics/王菲 - 紅豆.mp3';
  },

  toPlayList() {
    wx.navigateTo({
      url: '/pages/playList/playList',
    });
  }

})