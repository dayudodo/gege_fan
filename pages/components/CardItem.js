// pages/CardItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    src: {
      type: String,
      value: '',
    },
    tapEffect: {
      type: String,
      value: '',

    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flip_src:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickCard: function () {
      this.setData({
        tapEffect: 'animated rotateIn'
      })
      setTimeout(() => {
        //设置成新图片 
        this.setData({
          flip_src: this.properties.src,
          tapEffect: ''
        })
      }, 750)
    },

  }
})
