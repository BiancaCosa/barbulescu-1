/*
	  Hecho con mucho amor por Devscola y Nolegaltech <3
*/
$(document).ready(function(){
  $.MultiLanguage('assets/js/translations.json');
    initializeICheck();

    initializeSubmitButton();
    
    initializeTranslate();

    chooseLangToTranslate();
  
});

function initializeTranslate(){
  $.MultiLanguage('assets/js/translations.json');
};

function chooseLangToTranslate(){
  $.extend($.fn, {
      jq-dropdown: function (method, data) {

          switch (method) {
              case 'click':
                  click(null, $(this));
                  console.log($(this))
                  return $.MultiLanguage('assets/js/translations.json', $(this));
              case 'show':
                  show(null, $(this));   
              case 'hide':
                  hide();
                  return $(this);
              case 'attach':
                  return $(this).attr('data-jq-dropdown', data);
              case 'detach':
                  hide();
                  return $(this).removeAttr('data-jq-dropdown');
              case 'disable':
                  return $(this).addClass('jq-dropdown-disabled');
              case 'enable':
                  hide();
                  return $(this).removeClass('jq-dropdown-disabled');
          }

      }
  });
   
};
 

function initializeICheck(){
    $('input').iCheck({
        checkboxClass: 'icheckbox_square',
        radioClass: 'iradio_square-blue',
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