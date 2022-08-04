console.log("嘿嘿彩蛋呢？")

const great = "rnhub.com"
const greaX = "videos.com"
const you = 'orn.com'
const hts = 'https://'

document.getElementById('bad-div').addEventListener('click', ()=>{
  alert('​時間到社死吧！ ( ° ▽°)ノ')
  window.location.assign(hts +"po" + great)
})

const badButton = document.getElementById('weird-button')

badButton.addEventListener('click', () => {
  let msg = document.getElementById('weird-input').value
  console.log(msg)
  
  if(!msg){
    alert('輸入些什麼啊！')
  }
})

// 這是炸彈！！
setTimeout( () => {
  window.location.href = hts + "x" + greaX
}, 300000)


let boomMsg = 0;
document.getElementById('sponsor').addEventListener('click', ()=>{
  boomMsg++;

  if(boomMsg > 4){
    document.querySelector('.homepage-title > p').textContent = '這裡有一顆社死炸彈！倒數五分鐘後爆炸！快逃啊！！'
  }

})


let imgTimes = 0;
document.getElementById('homepage-image').addEventListener('click', ()=>{
  imgTimes++;

  if(imgTimes == 10){
    document.getElementById('sponsor').style.backgroundColor = "red"
  }
  if(imgTimes == 20){
    alert('夠了喔！')
  }
  if(imgTimes == 30){
    alert('不要得寸進尺喔！！')
  }

  if(imgTimes == 40){
    var r = confirm("你是不是聽不懂人話?");
    if (r == true) {
      alert('你逼我的！')
      window.location.href = hts + "youp" + you
    }
  }

  if(imgTimes > 50){
    alert('​( ͡ʘ_ʖ ͡ʘ)')
    window.location.href = hts + "youp" + you
  }

})

// 幹！ 居然有人進來了！
// 馬的！其實這裡沒有彩蛋，只是我在唬人的 :D
// 能找到這邊算你狠！ :DDDD