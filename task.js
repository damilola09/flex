let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let btn1 = document.querySelector('#btn1')
let attach = document.querySelector('.attach')


num1.textContent = Math.floor(Math.random() * 100) + 1
num2.textContent = Math.floor(Math.random() * 100) + 1

btn1.addEventListener('click', ()=>{
    let span = document.createElement('span')
    span.setAttribute('class', 'show')
    span.textContent = `${Math.floor(Math.random() * 100) + 1}` + " "
    attach.append(span)
})