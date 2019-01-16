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
    show: {
      type: Boolean,
      value: true,
      observer: function(newVal, oldVal) {
        console.log('observer: ', newVal)
        if( false == newVal ){
          this.setData({
            _hidden: true,
            showEffect: 'hide'
          })
        }

      }
    },
    showEffect: {
      type: String,
      value: '',

    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _hidden: false
  },

  /**
   * 组件的方法列表
   */
  methods: {

    clickCard: function() {
      this.setData({
        showEffect: 'animated rotateIn'
      })
      setTimeout(() => {
        //设置成新图片 
        this.setData({
          flip_src: this.properties.src,
          showEffect: ''
        })
      }, 750)
    },

  }
})