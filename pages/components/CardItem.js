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
    showback: {
      type: Boolean,
      value: true,
      observer: function(newVal, oldVal) {
        console.log('observer showback : ', newVal)
        if( true == newVal ){
          this.setData({
            _showback: true,
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
    _showback: false
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
          _showback: false,
          flip_src: this.properties.src,
          showEffect: ''
        })
      }, 750)
    },

  }
})