const time = new Date().toTimeString()
const hour = time.split(' ')[0].substr(0, 2)

const screen =  window.screen.width
const picture = document.getElementsByClassName('homepage')[0]

// change picture
if(hour > 20 ){

    if(screen > 1100){
        // conputer
        picture.style.backgroundImage = "url('../image/food/bg-n.jpg')";

    }else{
        // phone
        picture.style.backgroundImage = "url('../image/food/bg-n-phone.jpg')";
    }

}else if(hour > 12){

    if(screen > 1100){
        // conputer
        picture.style.backgroundImage = "url('../image/food/bg-l.jpeg')";
        

    }else{
        // phone
        picture.style.backgroundImage = "url('../image/food/bg-l-phone.jpeg')";
    }

}else{

    picture.style.backgroundImage = "url('../image/food/bg-b.jpeg')";

}