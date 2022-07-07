inp1 = document.getElementsByClassName("bir")[0]
inp2 = document.getElementsByClassName("iki")[0]
inp3 = document.getElementsByClassName("uc")[0]
inp4 = document.getElementsByClassName("dort")[0]
btn = document.getElementsByClassName("duyme")[0]


btn.addEventListener("click",function () {
    inp4.value = inp1.value/inp2.value + (inp1.value*inp3.value)/100
})