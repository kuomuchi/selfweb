const profileData = new Promise((resolve, reject) => {

    fetch(location.origin+ '/api/data', {method:'GET'}).then( res => {
      resolve(res.json())

    }).catch( error =>{

      console.log('data error')
      reject(error)

    })
})


function createProfilePage(data){

  console.log("create page")
  console.log(data)

  document.getElementsByClassName('main-box')[0].innerHTML = ''

  for(let i = 0; i < data.length; i++){
    let profile =  data[i]
    
    //Catch Page-body element
    // const outSidsElm = document.getElementsByClassName('select-box')[0]

    const outSidsElm = document.getElementsByClassName('main-box')[0]

    //create data to front-end
    const newitem = document.createElement('a')
    newitem.className = 'main-item'
    newitem.href = location.origin + "/profile_detail.html?id=" + profile.id
    

    let imageTrue = profile.image
    if(!imageTrue){
      imageTrue = "https://fakeimg.pl/150x150/"
    }

    let titleLimite = profile.title

    if(titleLimite.length > 10){
      titleLimite = titleLimite.slice(0,11)
    }

    
    //create html
    newitem.innerHTML ="\
    <img src= '"+ imageTrue +"'></img>\
    <h2>" + titleLimite +"</h2>\
    <p>" + profile.time_date +"</p>\
    <p>" + profile.type +"</p>"

    outSidsElm.appendChild(newitem)
  }

}

// 查詢資料
document.getElementById("button").addEventListener("click", () => {

  console.log('button is click')

  const selectData = new Promise((resolve, reject) => {

    const keyword = document.getElementById('select').value
    const type = document.getElementById('type').value

    console.log(keyword +" and "+ type)

    fetch(location.origin+ '/api/data?keyword='+keyword+'&type='+type, {method:'GET'}).then(res => {
      resolve(res.json())
      
    }).catch(error =>{
      console.log('get new data error \n error is :' + error)
      reject(error)
      return
    })

  })

  // document.getElementsByClassName("main-box")[0].innerHTML = ""
  
  selectData.then(createProfilePage)

  //reset
  document.getElementById("select").value = ''



});


profileData.then(createProfilePage)