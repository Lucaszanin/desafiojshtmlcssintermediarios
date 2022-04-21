// Primeiro tenho que pegar o click na seta voltar por exemplo
// Ai tenho que verificar qual imagem eu estou e decrementar o número da imagem , 
// no avançar é o inverso porém eu incremento cada vez que clicar na seta

let setaEsquerda = document.getElementById('btn-esquerda')
let setaDireita = document.getElementById('btn-direita')
let imagemSlider = document.getElementsByClassName('slider')
let quantidadeImagens = imagemSlider.length
let imagemAtual = 0
// console.log(setaDireita)
// console.log(setaEsquerda)


setaDireita.addEventListener('click', function () {


    if (imagemAtual === quantidadeImagens - 1) {
        return
    }
    if (imagemAtual === quantidadeImagens - 2) {
        setaDireita.style.opacity = 0.5
    }

    imagemAtual++;
    imagemSlider[imagemAtual].classList.add('mostrar')
    imagemSlider[imagemAtual - 1].classList.remove('mostrar')

    setaEsquerda.style.opacity = 1
    console.log("Contador", imagemAtual)
});

setaEsquerda.addEventListener('click', function () {


    if (imagemAtual === 0) {
        return
    }

    if (imagemAtual === 1) {
        setaEsquerda.style.opacity = .5
    }

    imagemAtual--;
    imagemSlider[imagemAtual].classList.add('mostrar')
    imagemSlider[imagemAtual + 1].classList.remove('mostrar')

    setaDireita.style.opacity = 1

});


