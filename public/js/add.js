let selectId = 'new'


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
    const outSidsElm = document.getElementsByClassName('select-box')[0]

    //create data to front-end
    const newitem = document.createElement('div')
    newitem.className = 'msg-item'

    //create html
    newitem.innerHTML ="\
    <div>" + profile.title +"</div>\
    <div>" + profile.time_date +"</div>\
    <div>" + profile.type +"</div>"

    newitem.addEventListener('click', ()=>{

      selectId = profile.id

      let content = profile.directions
      document.getElementById('title-edit').value = profile.title
      document.getElementById('time-edit').value = profile.time_date
      document.getElementById('type-edit').value = profile.type

      content = content.replaceAll('<br>', "\n");

      document.getElementById('directions-edit').value = content

      content = content.replaceAll('\n', "<br>");
      descriptContent = content

    })

    outSidsElm.appendChild(newitem)
  }
}

//第一次抓取資料
profileData.then(catchData)

document.getElementById('reset').addEventListener('click', () => {

  document.getElementById('title-edit').value = ''
  document.getElementById('time-edit').value = ''
  document.getElementById('directions-edit').value = ''

  selectId = 'new'
  
})



// 成功拿取
async function patchData(){

  console.log('test')
  const boay = {body:1}

  await fetch(location.origin + '/api/data', {
  	method: 'PATCH',
  	body: JSON.stringify({
      title: 'foo',
    }),
  	headers: {'Content-Type': 'application/json'}
  }).then( async res => {

    console.log( await res.text())

  }).catch( error => {
    console.log(error)
    return error
  })
  
}

patchData()