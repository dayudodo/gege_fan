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
            this.data.canClick = false
            setTimeout(() => {
              //设置成新图片 
              this.setData({
                _showback: true,
              })
              this.data.canClick = true
            }, DELAY * 3)
            break;
          case RIGHT:
            console.log('right')
            this.data.canClick = false
            setTimeout(() => {
              //设置成新图片 
              this.setData({
                _showright: true,
              })
            }, DELAY)
            break;
          case IMAGE:
            console.log('image')
            this.data.canClick = false
            setTimeout(() => {
              //设置成新图片 
              this.setData({
                _showback: false,
                flip_src: this.properties.src,
                showEffect: ''
              })
              //当显示为图片的时候不能再点击了，哪怕时间过了也不行，除非变成back状态
              // this.data.canClick = true
            }, DELAY)
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
    canClick: true,

  },

  /**
   * 组件的方法列表
   */
  methods: {

    clickCard: function() {

      //点击之后不再能够点击，除非旋转状态完成，并且不为right!
      if (this.data.canClick) {
        const eventDetail = {
          status: this.properties.status,
          idx: this.properties.idx,
          itemid: this.properties.itemid
        }
        this.triggerEvent('myclick', eventDetail)
        this.setData({
          showEffect: 'animated rotateIn'
        })
        //点击之后就不能再点击，除非时间过了！并且还不能是上次点击过的！
        this.data.canClick = false
      }
    },

  }
})