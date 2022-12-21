const spanTitle = document.querySelector('#words');
const wordsTitle = ["nexsalvarez", "developer", "data analyst", "Nestor", "front-end"];
let wordsTitleContent = spanTitle.innerHTML;
let addingWord = false;
let counter = 1;

setInterval (function() {
    if(wordsTitleContent.length > 0 && !addingWord) {
        spanTitle.innerHTML = wordsTitleContent.slice(0, -1);
        wordsTitleContent = spanTitle.innerHTML;
    } else {
        addingWord = true;
    }

    if(addingWord) {
        if(wordsTitleContent.length < wordsTitle[counter].length) {
          spanTitle.innerHTML = wordsTitle[counter].slice(0, wordsTitleContent.length +1);
          wordsTitleContent = spanTitle.innerHTML;
        } else {
          if(counter < wordsTitle.length) {
            counter ++;
          }
          addingWord = false;
        }
    }

    if(counter == wordsTitle.length) {
        counter = 0;
    }
    
}, 150);

const servicointi = new Project ('Personal', 'Servicointi', 'feb 2022', './src/img/desktop-capture-servicointi.png', 'WordPress', 'La página web de la empresa familiar, Servicointi, fue creada por mí utilizando las herramientas de WordPress', 'https://servicointi.com/');
servicointi.createProject();
