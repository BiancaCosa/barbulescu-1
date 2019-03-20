$(document).ready(function(){
  
  $('input').iCheck({
    checkboxClass: 'icheckbox_square',
    radioClass: 'iradio_square-blue',
  });

    $( "#js-form-button" ).on( "click", function() {
      $( ".qz-action" ).each(function( index ) {
        var input = $( ".iradio_square-blue" ).each(function() { 
        console.log( $( this ).hasClass('aria-checked') );

        });
    });

  });
});

 