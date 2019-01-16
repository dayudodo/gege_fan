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


var questions = [{
    src: "https://www.gsenglish.cn/pictures/20171222145725sheep31513925751.jpg",
    id: 0,
    show: true
  },
  {
    src: "https://www.gsenglish.cn/pictures/20130808071726look%20down%5Ecat%20look%20down%5Ecat%5Elooked%20down.jpg",
    id: 1,
    show: true
  }
]
//用户的回答，也就是点击了哪个索引！
var g_answers = []
//有几个正确的
var g_right_count = 0;

var reset_answer = function() {
  g_answers = []
}


Page({
  data: {
    src: questions,
    showArray: [],
    answers: []
  },

  onLoad: function() {
    let showArray = randArray(questions)
    // console.log(showArray)
    this.setData({
      showArray: showArray
    })
  },
  isAnswerRight:function(){
    return g_answers[0].id == g_answers[1].id
  },
  parentClick: function(event) {
    let id = event.currentTarget.dataset.id
    let index = event.currentTarget.dataset.index
    console.log(event.target)
    console.log('parentClick', id)
    g_answers.push({"id": id, "index": index})

    if (g_answers.length == questions.length) {
      if (this.isAnswerRight()) {
        console.log('right')
        //让正确的隐藏起来！比较方便笨的办法就是重新生成要显示的数组！
        let newShowArray = Array.from(this.data.showArray)
        for(var item of g_answers){
          newShowArray[item.index].show = false
        }
        console.log("changed: ",g_answers, newShowArray)

        this.setData({
          showArray: newShowArray
        })

        //重置回答数组
        reset_answer()

        g_right_count++
        console.log("胜利次数：", g_right_count)
        if (g_right_count == questions.length) {
          console.log('game over,  should restart')
          reset_answer()
          g_right_count = 0
        }



      } else {
        reset_answer()
        console.log('wrong, 重新选择', g_answers)
      }
    }


  }

})