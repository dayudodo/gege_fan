// pages/CardItem.js
const BACK = 0,
  RIGHT = 1,
  IMAGE = 2,
  DELAY = 750

Component({
  /**
   * 组件的属性列表
   */
  properties: {

    src: {
      type: String,
      value: '',
    },
    itemid: {
      type: Number,
      value: null
    },
    idx: {
      type: Number,
      value: null
    },
    status: {
      type: Number,
      value: BACK,
      observer: function(newVal, oldVal) {
        console.log('observer status : ', newVal)
        // if( true == newVal ){
        //   this.setData({
        //     _showback: true,
        //   })
        // }
        switch (newVal) {
          case BACK:
            console.log('back')
            // this.setData({
            //   _showback:true
            // })
            setTimeout(() => {
              //设置成新图片 
              this.setData({
                _showback: true,
              })
            }, DELAY * 3)
            break;
          case RIGHT:
            console.log('right')
            setTimeout(() => {
              //设置成新图片 
              this.setData({
                _showright: true,
              })
            }, DELAY )
            break;
          case IMAGE:
            console.log('image')
            setTimeout(() => {
              //设置成新图片 
              this.setData({
                _showback: false,
                flip_src: this.properties.src,
                showEffect: ''
              })
            }, 750)
            break;
          default:
            throw new Error('status has error value:', newVal)
        }

      }
    },
    showEffect: {
      type: String,
      value: '',

    }
  },

  /**
   * 组件默认显示背面
   */
  data: {
    _status: BACK,
  },

  /**
   * 组件的方法列表
   */
  methods: {

    clickCard: function() {
      const eventDetail = {
        status: this.properties.status,
        idx: this.properties.idx,
        itemid: this.properties.itemid
      }
      if(this.properties.status != RIGHT){
        this.triggerEvent('myclick', eventDetail)
        this.setData({
          showEffect: 'animated rotateIn'
        })
      }
    },

  }
})