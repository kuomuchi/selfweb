const getPageId = window.location.search.split("?id=")[1]

const detailData = new Promise((resolve, reject) => {

  fetch(location.origin+ '/api/data/?id=' + getPageId, {method:'GET'}).then( res => {
    resolve(res.json())

  }).catch( error =>{

    console.log('data error')
    reject(error)

  })

})

function createDetailPage(data){

  const deatil = data[0]
  let imageTrue = deatil.image
  

  if(!imageTrue){
    imageTrue = "https://fakeimg.pl/400x400/"
  }

  document.querySelector('.main_deatil > h1').innerHTML = deatil.title
  document.querySelector('.main_deatil > img').src = imageTrue

  //time
  document.querySelector('#time').innerHTML = deatil.time_date

  //type
  document.querySelector('#type').innerHTML = deatil.type

  //content
  document.querySelector('#directions').innerHTML = deatil.directions

}

detailData.then(createDetailPage)