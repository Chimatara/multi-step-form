const nextButton = document.querySelectorAll('.next')
const prevButton = document.querySelectorAll('.prev')
const circles = document.querySelectorAll('.progress-circles')
const progress = document.querySelector('.progress-bar')
const formPages = document.querySelectorAll('.form-page')

let currentActive = 0

nextButton.forEach(button => {
    button.addEventListener('click', () =>{
       currentActive++;
       updateFormPage()
       updateProgress()
    })
})

prevButton.forEach(button => {
    button.addEventListener('click', () =>{
       currentActive--;
       updateFormPage()
       updateProgress()
    })
})

function updateFormPage() {
    formPages.forEach(formpage => {
        if(formpage.classList.contains('form-page-active')){
            formpage.classList.remove('form-page-active')
        }
    })
    formPages[currentActive].classList.add('form-page-active')
}

function updateProgress() {
    circles.forEach((circle, index) => {
        if(index < currentActive + 1){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')  
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

   
}