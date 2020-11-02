const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    current: null,
  },

  /**
   * 组件的初始数据
   */
  data: {
    max: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showMax: function(e) {
      this.setData({
        max: true
      })
    }
  },

  
 

})
