$(document).ready(function(){
  
  $('input').iCheck({
    checkboxClass: 'icheckbox_square',
    radioClass: 'iradio_square-blue',
  });

  $( "#js-form-button" ).on( "click", function() {
    $( ".iradio_square-blue" ).each(function( index ) {
     // $( this ).getAttribute("aria-checked")

      console.log( $( this ).hasClass('aria-disabled') );
    });
    
  });
});