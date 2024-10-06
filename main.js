
function tocaSom(idElementoAudio) {
const elemento = document.querySelector(idElementoAudio).play();


if( elemento != null && elemento.localName === 'audio'){
   elemento.play();
}
else{
  //alert('Elemento não encontrado');
  console.log('Elemento não encotrado ou seletor inválido');
  }
}



const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador= 0;

//para
for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function() {
    tocaSom(idAudio);    
    }

    tecla.onkeydown = function (evento) {
        
     if (evento.code ==='Space'|| evento.code === 'Enter'){ 
     tecla.classList.add('ativa');
     }

    }
    tecla.onkeyup = function (){
        tecla.classList.remove ('ativa');
    }

}