// document.title = 'Lulus tes'
// const body = document.body
// body.append('Hello World')

// const h1 = document.createElement('h1')

// h1.textContent = 'Ini menggunakan createElement'

// const elementLain = document.createElement('p')
// elementLain.innerHTML = 'Ini menggunakan innerHTML' 

// const elementLainLagi = document.createElement('p')
// elementLainLagi.innerText = 'Ini menggunakan innerText'

// body.append(h1)
// body.append(elementLain)
// body.append(elementLainLagi)

// const btn1 = document.getElementById('btn1')
// const btn2 = document.querySelector('.btn2')

// const defaultText = 'Button 1'
// btn1.textContent = defaultText


// btn1.style.backgroundColor = 'green'
// btn1.style.padding = '5px'
// btn1.style.borderRadius = '5px'



// function gantiWarna() {
//     btn1.style.backgroundColor = 'yellow'
// }
// function warnaAsli() {
//     btn1.style.backgroundColor = 'green'
// }
// function rubahText() {
//     btn1.textContent = 'berhasil'
// }
// function oriText() {
//     btn1.textContent = defaultText
// }

console.log('oke')

const endpoint = 'https://reqres.in/api/users/1'

// Push Data



// Get Data
fetch(endpoint)
.then((result) => result.json())
.then(({data}) => console.log(data))

