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

//生成一个随机的双倍数组，2*2，3*2，4*2这样
const randArray = function(src) {
  let resultArr = new Array();
  for (let i = 0; i < src.length * 2; i++) {
    //保存重复的数据到数组中
    resultArr.push(Object.assign({}, src[i % src.length]))
  }
  shuffle(resultArr)
  console.log(resultArr)
  return resultArr
}
const BACK = 0,
  RIGHT = 1,
  IMAGE = 2


var questions = [{
    src: "https://www.gsenglish.cn/pictures/20171222145725sheep31513925751.jpg",
    id: 0,
    status: BACK,
    canclick:true,
  },
  {
    src: "https://www.gsenglish.cn/pictures/20130808071726look%20down%5Ecat%20look%20down%5Ecat%5Elooked%20down.jpg",
    id: 1,
    status: BACK,
    canclick: true,
  },
    {
      src: "https://www.gsenglish.cn/pictures/20180107213957dog%5Ea%20dog%5Eone%20dog41515320930.jpg",
    id: 2,
    status: BACK,
    canclick: true
  }
]
//
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
  isAnswerRight: function() {
    return g_answers[0].id == g_answers[1].id
  },
  testChildClick: function(e) {
    console.log('from child:', e.detail)
    //传递到子组件carditem中的id命名为itemid,是为了避免与id命名冲突，idx是为了写的方便
    let id = e.detail.itemid
    let index = e.detail.idx
    g_answers.push({
      "id": id,
      "index": index
    })
    //不管点击哪一个，都要先显示出来！
    let clickArray = Array.from(this.data.showArray)
    // console.log("original clickArray", clickArray, clickArray[index])
    clickArray[index].status  = IMAGE
    // console.log("child clicked! ", clickArray, clickArray[index])
    this.setData({
      canClick: true,
      showArray: clickArray
    })

    //如果回答是成对的，就要开始判断是否正确了！
    if (g_answers.length == 2 ) {
      if (this.isAnswerRight()) {
        //todo 都不能再点击了，不然会出现其它错误！

        //让正确的隐藏起来！比较方便笨的办法就是重新生成要显示的数组！
        let newShowArray = Array.from(this.data.showArray)
        for (var item of g_answers) {
          newShowArray[item.index].status = RIGHT
        }
        console.log("newShowArray changed: ", g_answers, newShowArray)

        //缓慢消失，

        setTimeout(() => {
          this.setData({
            canClick: true,
            showArray: newShowArray
          })
        }, 750 + 1000)


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

        console.log('wrong, 重新选择，并翻转图片的背景showback', g_answers)
        let newShowArray = Array.from(this.data.showArray)
        for (var item of g_answers) {
          newShowArray[item.index].status = BACK
        }
        console.log("newShowArray changed: ", g_answers, newShowArray)

        //反映到子组件之后才会重置回答！
        reset_answer()
        this.setData({
          showArray: newShowArray
        })

      }
    }
  },

  parentClick: function(event) {
    let id = event.currentTarget.dataset.id
    let index = event.currentTarget.dataset.index
    console.log(event.target)
    console.log('parentClick', id)
    g_answers.push({
      "id": id,
      "index": index
    })

    if (g_answers.length == questions.length) {
      if (this.isAnswerRight()) {
        // 都不能再点击了，不然会出现其它错误！

        //让正确的隐藏起来！比较方便笨的办法就是重新生成要显示的数组！
        let newShowArray = Array.from(this.data.showArray)
        for (var item of g_answers) {
          newShowArray[item.index].status = RIGHT
        }
        console.log("newShowArray changed: ", g_answers, newShowArray)

        //缓慢消失，

        setTimeout(() => {
          this.setData({
            canClick: true,
            showArray: newShowArray
          })
        }, 750 + 1000)


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

        console.log('wrong, 重新选择，并翻转图片的背景showback', g_answers)
        let newShowArray = Array.from(this.data.showArray)
        for (var item of g_answers) {
          newShowArray[item.index].status = BACK
        }
        console.log("newShowArray changed: ", g_answers, newShowArray)

        //反映到子组件之后才会重置回答！
        reset_answer()
        this.setData({
          showArray: newShowArray
        })

      }
    }


  }

})