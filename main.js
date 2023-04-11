document.title = "Bisa Javascript DOM"
console.log(document.title)

const body = document.body
body.append('Bismillah besok PASTI DITERIMA')

const h3Coba = document.createElement('h3')
h3Coba.textContent = "Bismillah"
console.log (h3Coba.textContent)

const cobaLagi = document.createElement('h3')
cobaLagi.innerHTML = "Bisa"

const cobaLagiTerakhir = document.createElement('h3')
cobaLagiTerakhir.innerText = "Alhamdulillah"

body.append(h3Coba)
body.append(cobaLagi)
body.append(cobaLagiTerakhir)

const btn1 = document.getElementById('btn1')

const btn2 = document.querySelector('.btn2')

function clickfunction() {
    btn1.style.backgroundColor = 'Yellow'
}

function clickfunction2() {
    btn2.style.backgroundColor = 'Yellow'
}

function overfunction() {
    btn1.textContent = "Tulisan Berubah"
}

const ori = "Ini oritext"
btn2.textContent = ori

function overfunction2() {
    btn2.textContent = "Cetak tulisan dibawah"
    const newtext = document.createElement('p')
    newtext.textContent = "Tulisan berhasil dicetak"
    body.append(newtext)
}
function outfunction() {
    btn2.textContent = ori
}


btn1.style.padding = '10px'
btn1.style.backgroundColor = 'Aqua'
btn1.style.borderRadius = '7px'