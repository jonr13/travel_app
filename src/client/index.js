import './styles/style.scss'
import { handleSubmit } from './js/app'
alert("I EXIST")

import img1 from './media/map_1.jpg'
import img2 from './media/map_2.jpg'

//import the main function of your application javascript
//export the main function of your application javascript

document.getElementById('generate').addEventListener('click', handleSubmit);


//call the exported function here

window.addEventListener('DOMContentLoaded',function(){
    document.getElementById('map_1').setAttribute('src', img1)
    document.getElementById('map_2').setAttribute('src', img2)
  })

export { handleSubmit }