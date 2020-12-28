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
            document.getElementById("descricao-completa").innerHTML = "Um homem misterioso que atende pelo nome de El Profesor, está planejando o maior assalto do século. A fim de realizar o ambicioso plano ele recruta uma gangue de oito pessoas com certas habilidades que não tem nada a perder. O objetivo é infiltrar na Casa da Moeda, de modo que eles possam imprimir 2,4 bilhões de euros. Para fazer isso eles precisam de onze dias de reclusão, durante o qual eles vão ter que lidar com sessenta e sete reféns e as forças da Polícia de Elite, com cenas de muita ação e planos brilhantes de El Profesor.";
        } else {
            document.getElementById("descricao-completa").innerHTML = "";
        }
    }, 200);
}


function assistirTrailer(){
    window.open('https://www.youtube.com/c/NetflixBrasil/search?query=la%20casa%20de%20papel','_blank');
}
