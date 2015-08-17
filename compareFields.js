/**
 * Script compares two fields on the event that either one
 * is changing and the either sets or clears a message.
 */

// Specify event for each field being compared
document.getElementById('confirm-password').oninput =
  function(){ onPassChange(); };

document.getElementById('password').oninput =
  function(){ onPassChange(); };

/**
 * Function compares the current value of either field, 
 * if they do not comapare then a span is placed
 * under one of the fields.  If they do compare, any
 * span placed under the confirm password field is detached.
 * 
 * Label color changes, depending on compare:  
 *  Match = #4D4D4D  Miss = #A94442
 */
function onPassChange(){
  
  // Specify message for span to be inserted
  $span = '<span class="help-block ">Passwords are not equal</span>';
  
  // If passwords match, remove span and revert styles
  if( $('#confirm-password').val() === $('#password').val() ){
    // Label 
    $("[for='confirm-password']").css('color', '#4D4D4D');
    // Field border
    $('#confirm-password').css({
      'border-color': '#9C9C9C',
      'border-bottom-color': '999'
    });
    $("input#confirm-password + span").detach();
  }
  
  // If they do not, create a span and styles,
  // provided that a span does not already exist
  else if($('input#confirm-password + span').length == 0){ 
    // Label
    $("[for='confirm-password']").css('color', '#A94442');
    // Field border
    $('#confirm-password').css({
      'border-color': '#843534',
      'border-width':'0.833333px', 
      'border-radius':'4px'
    });
    // Insert span
    $('#confirm-password').after($span);
    // Style span
    $("span.help-block").css('color', '#A94442'); 
  }
}
