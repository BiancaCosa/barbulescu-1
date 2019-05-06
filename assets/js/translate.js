$(document).ready(function () {
    initializeTranslate();
});

function initializeTranslate() {
    var translator = $('body').translate({ lang: "es", t: transDictionary });
    var str = translator.g("translate");

    addChangeLangListener(function (lang) {
        translator.lang(lang);
    })
};

function addChangeLangListener(translate) {
    $("#jq-dropdown").click(
        function (event) {
            event.preventDefault();
            var lang = event.target.id
            translate(lang);
        });
}