let selectId = 'new'
let newId = -1


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

  document.getElementById('out-box').innerHTML = ''

  newId = data.length

  for(let time = 0; time < data.length; time++){
    let profile =  data[time]
    
    //Catch Page-body element
    // const outSidsElm = document.getElementsByClassName('select-box')[0]

    const outSidsElm = document.getElementById('out-box')

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
      document.getElementById('img-edit').value = profile.image

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
  document.getElementById('img-edit').value = ''
  document.getElementById('directions-edit').value = ''

  selectId = 'new'
  
})



// 成功拿取
async function patchData(){

  let content = ''  

  content = document.getElementById('directions-edit').value
  content = content.replaceAll("\n", '<br>');

  const data = {
    id: selectId,
    time_data: document.getElementById('time-edit').value,
    image: document.getElementById('img-edit').value,
    title: document.getElementById('title-edit').value,
    type: document.getElementById('type-edit').value,
    directions: content,
    newId: newId
  }

  await fetch(location.origin + '/api/data', {
  	method: 'PATCH',
  	body: JSON.stringify({
      data
    }),
  	headers: {'Content-Type': 'application/json'}
  }).then( async res => {

    const resend = await res.text()
    if(resend == "1"){
      alert('更新成功')


    }else if(resend == "0"){
      alert('出問題了！')
    }

  }).catch( error => {
    console.log(error)
    return error
  })
  
}


// 新增 + 更新
document.getElementById("edit").addEventListener('click', () => {

  if(selectId == "new"){
    newId++
  }

  let edit = confirm("使否確定修改?");
  if (edit){
    patchData()
  }
})


// 刪除

document.getElementById("delete").addEventListener('click', async () => {

  if(selectId == 'new'){
    alert('選擇想刪除的資料')

  }else{

    let del = confirm("是否刪除？");
    if (del){

      await fetch(location.origin + '/api/data', {
        method: 'DELETE',
        body: JSON.stringify({
          id: selectId
        }),
        headers: {'Content-Type': 'application/json'}
      }).then( async res => {
      
        const resend = await res.text()

        if(resend == "1"){
          alert('刪除成功')

        }else if(resend == "0"){
          alert('出問題了！')
        }
      
      }).catch( error => {
        console.log(error)
        return error
      })
      
    }
    
  }

})



