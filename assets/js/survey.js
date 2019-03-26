$(document).ready(function(){
  
  $('input').iCheck({
    checkboxClass: 'icheckbox_square',
    radioClass: 'iradio_square-blue',
  });

   
  
  $( "#js-form-button" ).on( 'click', function() {
    var radioList = $('input[type=radio]');
    var radioCheckedTrue = 0;
    var radioChecked = 0;

    radioList.each(function (index, radio){
      if (radio.checked) 
      radioChecked += 1
        
      if (radio.checked && radio.value == "1"){
        radioCheckedTrue += 1 
      }
    });

    if(radioChecked == 14 && radioCheckedTrue == 14)
      window.location = "privacy-safe.html"
    if(radioChecked < 14)
      alert("oye que no has respondido todas")
    if(radioChecked == 14 && radioCheckedTrue < 14)
      window.location = "privacy-invaded.html"
  

    console.log(checked)
    
  });
  
   
});





 
  



