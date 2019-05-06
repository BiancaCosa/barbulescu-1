$(document).ready(function () {
    initializeTranslate();
    addStoreLangListener();
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