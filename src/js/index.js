/*
        OBJETIVO - quando clicarmos no botao temos que mostrar a imagem de fundo correspondente

1- dar um jeito de pegar o emento HTML dos botoes
2- da um jeito de identificar o click do usuario no botao
3- desmarcar o botao marcado anterior
4- marcar o botao clicado como selecionado
5- esconder a imagem anterior 
6- fazer aparecer a imagem correspondente ao botao clicado
*/

const btnCarousel = document.querySelectorAll('.btn');
const imageCarousel = document.querySelectorAll('.image')

btnCarousel.forEach((btn, indece)=>{
    btn.addEventListener('click', ()=>{
        disableSelectedBtn();

        selectedCarouselBtn(btn);

        hideActiveImage();

        showActiveImage(indece);
    })
})

function showActiveImage(indece) {
    imageCarousel[indece].classList.add('active');
}

function selectedCarouselBtn(btn) {
    btn.classList.add('select');
}

function hideActiveImage() {
    const imageSelected = document.querySelector('.active');
    imageSelected.classList.remove('active');
}

function disableSelectedBtn() {
    const btnSelected = document.querySelector('.select');
    btnSelected.classList.remove('select');
}



/*modal*/

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.btn-spoiler');
const closeModal = document.querySelector('.close-modal')
const video = document.getElementById('video');
const linkVideo = video.src;
console.log(linkVideo);

openModal.addEventListener('click', ()=>{
    modalCloseOpen()
    video.setAttribute('src', linkVideo)
})

closeModal.addEventListener('click', ()=>{
    modalCloseOpen()
    video.setAttribute('src', '')
})

function modalCloseOpen(){
    modal.classList.toggle('aberto')
}