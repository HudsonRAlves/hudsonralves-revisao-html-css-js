window.onload = inicio;

function inicio() {

    var selecao = document.querySelectorAll('.Livros');


    for (var i = 0; i < selecao.length; i++) {
        var livros = selecao[i];
        livros.onmouseover = livroDestaque;
        livros.onmouseout = livroNormal;
    }

    function livroDestaque() {

        this.querySelector('.Detalhe').classList.add('Destaque');
        
    }

    function livroNormal() {

        this.querySelector('.Detalhe').classList.remove('Destaque');
    }
}



//function inicio() {
//
//    var livro = document.getElementById('L');
//
//    livro.onmouseover = livroDestaque;
//    livro.onmouseout = livroNormal;
//
//
//    function livroDestaque() {
//
//        document.getElementById('Primeiro').attributes['class'].value = "Detalhe";
//    }
//
//    function livroNormal() {
//
//        document.getElementById('Primeiro').attributes['class'].value = "Titulo";
//    }
//}
