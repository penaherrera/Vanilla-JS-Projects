//using selectors inside the element
//se crea una funcion (questionsF) que seleccione todos los botones y se le agrega un forEach para que recorra cada boton
//luego simplemente con un toggle se despliega la clase "show-text"
const questions = document.querySelectorAll('.question');

questions.forEach(function(questionsF){
    const btn =  questionsF.querySelector('.question-btn')

    btn.addEventListener('click', function(){

        questions.forEach(function(item){
            if(item !== questionsF){
                item.classList.remove("show-text")
            }
        })


        questionsF.classList.toggle('show-text')
    })
})





// traversing the dom
// se usa el metodo "parentElement" para encontrar el padre del padre de "show-text" que seria la clase "question"
// const btns = document.querySelectorAll('.question-btn');
// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
// })
