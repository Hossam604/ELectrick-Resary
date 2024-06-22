
var increase = document.getElementById('increase')
var screen = document.getElementById('screen')
 var button= document.getElementsByClassName('button')
 var btns= document.getElementsByTagName('button')
 var span = document.getElementsByTagName('span')
 var images=document.images
 let count =0

increase.addEventListener('click',function(){

  screen.innerHTML=++count
})

button[0].addEventListener('click',function(){
  screen.innerHTML=0
  count=0
})


var morning=['1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg','9.jpeg','10.jpeg','11.jpeg','12.jpeg']

let counter=0
btns[2].addEventListener('click',function(){
  counter++
  images[0].setAttribute('src',morning[counter])
  if(counter==morning.length){
    counter=0
  images[0].setAttribute('src',morning[counter])
  }
})

btns[3].addEventListener('click',function(){
  counter--
  images[0].setAttribute('src',morning[counter])
  if(counter<0){
    counter=morning.length-1
  images[0].setAttribute('src',morning[counter])

    
  }
})

btns[0].addEventListener('click',function(){
  images[1].classList.add('d-none')
  images[0].classList.remove('d-none')
  btns[4].classList.add('d-none')
  btns[5].classList.add('d-none')
  btns[2].classList.remove('d-none')
  btns[3].classList.remove('d-none')
 
})


btns[1].addEventListener('click',function(){
  images[0].classList.add('d-none')
  images[1].classList.remove('d-none')
  btns[2].classList.add('d-none')
  btns[3].classList.add('d-none')
  btns[4].classList.remove('d-none')
  btns[5].classList.remove('d-none')
 
})

var evening=['13.jpeg','14.jpeg','15.jpeg','16.jpeg','17.jpeg','18.jpeg','19.jpeg','20.jpeg','21.jpeg','22.jpeg']


let counter1=0
btns[4].addEventListener('click',function(){
  counter1++
  images[1].setAttribute('src',evening[counter1])
  if(counter1==evening.length){
    counter1=0
  images[1].setAttribute('src',evening[counter1])
  }
})

btns[5].addEventListener('click',function(){
  counter1--
  images[1].setAttribute('src',evening[counter1])
  if(counter1<0){
    counter1=evening.length-1
  images[1].setAttribute('src',evening[counter1])

    
  }
})



button[1].addEventListener('click',function(){
  if(span[1].innerHTML=='Dark'){
span[1].innerHTML='Ligth'
document.body.style.backgroundColor='black'
  }
  else{
span[1].innerHTML='Dark'
document.body.style.backgroundColor='white'

  }

})
