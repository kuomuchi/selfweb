console.log("Login")

console.log(location.origin + '/api/data')

// 抓取所有課程資料

const profileData = new Promise((resolve, reject) => {
  fetch(location.origin+ '/api/data', {method:'GET'}).then( res => {
    resolve(res.json())
  }).catch( error =>{
    console.log('data error')
    reject(error)
  })
})


// 開始抓取、建立資料至前端
const catchData = data => {
  for(let time = 0; time < data.length; time++){
    let profile =  data[time]
    
    //Catch Page-body element
    const outSidsElm = document.getElementById('page-body')

    //create data to front-end
    const newitem = document.createElement('div')
    newitem.className = 'page'
    let imageElement = ''

    if(profile.image){
      imageElement = "<img class='page-image' src='" +profile.image +"'>"
    }

    //create html
    newitem.innerHTML = "<div class='page-title'> \
    <h1>"+ profile.title +"</h1> \
    <p>" + profile.time_date +"</p> \
    <p>類型: " + profile.type +"</p> \
    </div>"+ imageElement +"<div class=page-content>"+ profile.directions +"</div>"

    outSidsElm.appendChild(newitem)
  }
}

//第一次抓取資料
profileData.then(catchData)


// select-self
// select-input

//查詢
document.getElementById("input-button").addEventListener("click", () => {

  const selectData = new Promise((resolve, reject) => {

    const keyword = document.getElementById('select-input').value
    const type = document.getElementById('select-self').value

    fetch(location.origin+ '/api/data?keyword='+keyword+'&type='+type, {method:'GET'}).then(res => {
      resolve(res.json())
      
    }).catch(error =>{
      console.log('get new data error \n error is :' + error)
      reject(error)
      return
    })

  })

  document.getElementById("page-body").innerHTML = ""
  selectData.then(catchData)

  //reset
  document.getElementById("select-input").value = ''



});




