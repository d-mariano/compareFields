/**
 * Author: Dave Mariano
 *
 * Script compares two fields on the event that either one
 * is changing and the either sets or clears a message.
 */

// Specify event for each field being compared
document.getElementById('confirm-password').oninput =
  function(){ onPassChange(); };

document.getElementById('password').oninput =
  function(){ onPassChange(); };

/**
 * Function compares the current value of either field, if they do
 * not comapare then a span is placed under one of the fieldsand 
 * an error class is added to the parent div.  If they do compare, 
 * the parent class is removedand the add span is detached.
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
