/*
	  Hecho con mucho amor por Devscola y Nolegaltech <3
*/
$(document).ready(function(){

    initializeICheck();

    initializeSubmitButton();

    initializeDropDown();
    
    initializeTranslate();
  
});

function initializeTranslate(){
  $.MultiLanguage('translations.json');

  $( '#en' ).on( 'click', function(){
    $.MultiLanguage('translations.json', 'en')

  }); 
};

function initializeICheck(){
    $('input').iCheck({
        checkboxClass: 'icheckbox_square',
        radioClass: 'iradio_square-blue',
    });
};

function initializeDropDown(){
  $('#nav > ul').dropotron({
    mode: 'fade',
    noOpenerFade: true,
    alignment: 'center'
  });
};

function initializeSubmitButton(){
  $( "#submit-button" ).on( 'click', function(){
    const allTheQuestions = 14;
    var radioCheckedTrue = 0;
    var radioChecked = 0;


    $('input[type=radio]').each(function (index, radio){
      if (radio.checked){
        radioChecked += 1
      }
        
      if (radio.checked && radio.value == "1"){
        radioCheckedTrue += 1 
      }
    }); 

    if(radioChecked == allTheQuestions && radioCheckedTrue == allTheQuestions){
      window.location = "privacy-safe.html"
    } else if (radioChecked < allTheQuestions){
        alert("Deben estar todas las preguntas respondidas.")
    } else if (radioChecked == allTheQuestions && radioCheckedTrue < allTheQuestions){
        window.location = "privacy-invaded.html"
    }
  }); 

}