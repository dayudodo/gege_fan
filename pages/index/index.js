//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    src: [
      "https://www.gsenglish.cn/pictures/20171222145725sheep31513925751.jpg",
      "https://www.gsenglish.cn/pictures/20130808071726look%20down%5Ecat%20look%20down%5Ecat%5Elooked%20down.jpg"
    ]
  },

  onLoad: function () {

  },
  parentClick: function(){
    console.log('parentClick')
  }

})
