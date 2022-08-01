console.log("Login")

console.log(location.host + '/api/data')

// 抓取所有課程資料
const profileData = new Promise((resolve, reject) => {
  fetch('http://'+location.host + '/api/data', {method:'GET'}).then( res => {
    resolve(res.json())
  }).catch( error =>{
    console.log('data error')
    reject(error)
  })
})

// 開始抓取、建立資料至前端
profileData.then(data => {
  console.log(data)
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
    </div>"+ imageElement +"<div class=page-content>"+ profile.directions +"</div>"

    outSidsElm.appendChild(newitem)
  }
})


