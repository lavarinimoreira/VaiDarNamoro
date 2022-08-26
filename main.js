
function reproduzAudio(idElementAudio, /*fraseDoAudio*/){
    document.querySelector(idElementAudio).play();
    //document.querySelector('h1').innerHTML = fraseDoAudio
}

const LISTA_DOS_AUDIOS = document.querySelectorAll('.tecla');

let contador = 0;
let quantidadeElementosNaLista = LISTA_DOS_AUDIOS.length;

while(contador < quantidadeElementosNaLista){
    
    const TECLA = LISTA_DOS_AUDIOS[contador];
    const AUDIO = TECLA.classList[1];

    // template string
    const ID_AUDIO = `#som_${AUDIO}`;
    
    TECLA.onclick = function(){
        reproduzAudio(ID_AUDIO);
    };

    contador++;
}
