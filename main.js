function reproduzAudio(idElementAudio, fraseDoAudio){
    document.querySelector(idElementAudio).play();
    document.querySelector('h1').innerHTML = fraseDoAudio
}

const LISTA_DOS_AUDIOS = document.querySelectorAll('.tecla');
let frasesDosBotoes = ["<center>Ai...<br>--- GOSTEI ---",
                        "<center>Que isso meu filho...<br>--- CALMA ---",
                        "<center>Dança Gatinho<br> ---- DANÇA ----",
                        "--- DEMAAAIX ---",
                        "**** C A V A L O ****",
                        "iiIIIiIIIIRRA",
                        "<- Ele gOoOosta ->",
                        "~ PARE ~",
                        "- - - UUUUUUUIIIIR - - -"
];

let quantidadeElementosNaLista = LISTA_DOS_AUDIOS.length;

for(let contador = 0; contador < quantidadeElementosNaLista; contador++){
    
    const SEGUNDA_CLASSE_DA_TECLA = LISTA_DOS_AUDIOS[contador];
    const AUDIO = SEGUNDA_CLASSE_DA_TECLA.classList[1];

    const ID_AUDIO = `#som_${AUDIO}`; // template string
    
    SEGUNDA_CLASSE_DA_TECLA.onclick = function(){
        reproduzAudio(ID_AUDIO, frasesDosBotoes[contador]);
    }

    /*
    SEGUNDA_CLASSE_DA_TECLA.onkeydown = function(){
        SEGUNDA_CLASSE_DA_TECLA.classList.add('ativa');
    }
    */

}
