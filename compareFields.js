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
  $span = '<span class="help-block">Passwords are not equal</span>';
  $confirmPassword = $('#confirm-password');
  $password = $('#password');
  $confirmLabel = $confirmPassword.siblings("label");
  $existingSpan = $confirmPassword.siblings("span");
  $confirmDiv = $confirmPassword.parent();
  
  
  // If passwords match, remove span and revert styles
  if( $confirmPassword.val() === $password.val() ) {
    $existingSpan.detach();
    // Remove error class from div
    $confirmDiv.removeClass("has-error");
  }
  
  // If they do not, create a span and styles,
  // provided that a span does not already exist
  else if( $existingSpan.length === 0 ) { 
    // Insert span
    $confirmPassword.after($span);
    // Add error class to div
    $confirmDiv.addClass("has-error");
  }
}
