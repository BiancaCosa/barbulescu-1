/*
	  Hecho con mucho amor por Devscola y Nolegaltech <3
*/
$(document).ready(function () {
    initializeTranslate();
    addStoreLangListener();
    initializeIndexButton();
    transSubmitButton();
});

function initializeTranslate() {
    var currentLang = getLang();
    var translator = $('body').translate({ lang: currentLang, t: transDictionary });

    addChangeLangListener(function (lang) {
        translator.lang(lang);
    });
};

function addChangeLangListener(translate) {
    $("#jq-dropdown").click(
        function (event) {
            event.preventDefault();
            var lang = event.target.id
            //lang es la variable donde capturamos el idioma que seleccionamos del dropdown
            translate(lang);
        });
}

function addStoreLangListener(){
    $("#jq-dropdown").click(function (event) {
        event.preventDefault();
        localStorage.setItem('lang', event.target.id);
    });
}

function getLang(){
    localStorage.getItem('lang') || navigator.language;
}

function initializeIndexButton() {
    $("#start-button").on('click', function () {  
        initializeTranslate();   
        getLang();
           
    }); 
};

function transSubmitButton() {
    $("#submit-button").on('click', function () {
        getLang();  
        console.log('lang');   
           
    }); 
    
}