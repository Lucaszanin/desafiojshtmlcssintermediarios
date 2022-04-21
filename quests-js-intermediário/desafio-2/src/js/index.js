let setaAberta = document.querySelectorAll('.seta')
let perguntaResposta = document.getElementsByClassName('pergunta-resposta')
let respostas = document.querySelectorAll('.resposta')
let quantidadeDePerguntas = perguntaResposta.length




Array.from(perguntaResposta).forEach(function (element, indice) {

   perguntaResposta[indice].addEventListener('click', function () {

         respostas.forEach(function(element,indice) {
         element.classList.remove('mostrar-resposta')
         setaAberta[indice].classList.remove('seta-laranja')
      })
         
         console.log(respostas)
         if (element.nextElementSibling.classList.contains('mostrar-resposta')) {
            element.nextElementSibling.classList.remove('mostrar-resposta')
            console.log('Remove a Classe')

         }else {
            element.nextElementSibling.classList.add('mostrar-resposta')
            setaAberta[indice].classList.add('seta-laranja')
            console.log('Adiciona a classe')
         }
         
   })
})

