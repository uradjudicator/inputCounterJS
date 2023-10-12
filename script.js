const inputBox = document.querySelector('.input-box')
const input = document.querySelector('.input')
const inputCounter = document.querySelector('.counter')

input.addEventListener('input', () =>{
  inputCounter.classList.add('active')
  inputCounter.innerText = input.value.length  

  if(input.value.length > 100){
    inputCounter.style.backgroundColor = 'red'
  }
  else{
    inputCounter.style.backgroundColor = 'blue'
  }

  if(input.value.length === 0){ 
    inputCounter.classList.remove('active')
  }
})