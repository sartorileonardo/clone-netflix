$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

function mostrarDescricaoCompleta() {
    setTimeout(() => {
        let conteudoDescricaoCompleta = document.getElementById("descricao-completa").innerHTML;
        if (conteudoDescricaoCompleta == "") {
            document.getElementById("descricao-completa").innerHTML = "Um homem misterioso que atende pelo nome de El Profesor, está planejando o maior assalto do século. A fim de realizar o ambicioso plano ele recruta uma gangue de oito pessoas com certas habilidades que não tem nada a perder.";
        } else {
            document.getElementById("descricao-completa").innerHTML = "";
        }
    }, 200);
}


function assistirTrailer(){
    window.open('https://www.youtube.com/watch?v=uplP9GLl4k8','_blank');
}
