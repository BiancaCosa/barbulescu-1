/*
	Hecho con mucho amor por Devscola y Nolegaltech <3
*/
$(document).ready(function(){
  
  $('input').iCheck({
    checkboxClass: 'icheckbox_square',
    radioClass: 'iradio_square-blue',
  });

  

  $( "#js-form-button" ).on( 'click', function(){
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

    if(radioChecked == 14 && radioCheckedTrue == 14){
      window.location = "privacy-safe.html"
    } else if(radioChecked < 14){
       alert("Deben estar todas las preguntas respondidas.")
    } else (radioChecked == 14 && radioCheckedTrue < 14);{
       window.location = "privacy-invaded.html"
    }
    
  });

  
});
