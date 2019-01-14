//index.js
//获取应用实例
const app = getApp()
const shuffle = function(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
}

const randArray = function(src) {
  let resultArr = [];
  for (let i = 0; i < src.length * 2; i++) {

    resultArr.push(src[i % 2])
  }
  shuffle(resultArr)
  return resultArr

}

Page({
  data: {
    src: [
      "https://www.gsenglish.cn/pictures/20171222145725sheep31513925751.jpg",
      "https://www.gsenglish.cn/pictures/20130808071726look%20down%5Ecat%20look%20down%5Ecat%5Elooked%20down.jpg"
    ],
    showArray: [],
    answers:[]
  },

  onLoad: function() {
    let showArray = randArray(this.data.src)
    // console.log(showArray)
    this.setData({
      showArray: showArray
    })
  },
  parentClick: function(event) {
    console.log('parentClick', event.currentTarget.dataset.idx)
  }

})