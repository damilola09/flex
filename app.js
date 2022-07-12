let number = document.querySelector('.number')
let month = document.querySelector('.month')
let year = document.querySelector('.year')
let Name = document.querySelector('.name')
let cvv = document.querySelector('.cvv')
let cardNu = document.querySelector('.card-Nu')
let cardNa = document.querySelector('.card-Na')
let mth = document.querySelector('.mth')
let yr = document.querySelector('.yr')
let cardC = document.querySelector('.card-C')
let front = document.querySelector('.card-front')
let back = document.querySelector('.card-back')

number.addEventListener('input', ()=>{
    cardNu.textContent = number.value
})
Name.addEventListener('input', ()=>{
    cardNa.textContent = Name.value
})
month.addEventListener('input', ()=>{
    mth.textContent = month.value
})
year.addEventListener('input', ()=>{
    yr.textContent = year.value
})

cvv.addEventListener('mouseenter', () =>{
    front.style.transform = 'perspective(1000px) rotateY(180deg)'
    back.style.transform = 'perspective(1000px) rotateY(0deg)'
})
cvv.addEventListener('mouseleave', () =>{
    front.style.transform = 'perspective(1000px) rotateY(0deg)'
    back.style.transform = 'perspective(1000px) rotateY(180deg)'
})

cvv.addEventListener('input', () =>{
    cardC.textContent = cvv.value
})