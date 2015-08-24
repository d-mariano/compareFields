/**
 * Author: Dave Mariano
 *
 * Script compares two fields on the event that either one
 * is changing and then either sets or clears a message.
 */

// Specify event for each field being compared
document.getElementById('confirm-password').oninput =
  function(){ onFieldChange(); };

document.getElementById('password').oninput =
  function(){ onFieldChange(); };

/**
 * Function compares the current value of either field, if they do
 * not compare then a span is placed under one of the fields and
 * an error class is added to the parent div.  If they do compare, 
 * the parent class is removed and the added span is detached.
 *
 * For this scenario the div around the confirm label is given a
 * class, this class is referred to in a stylesheet.  If you are
 * using this script in your own application, be advised of the
 * different classes, ids, and elements your may use.
 */
function onFieldChange(){
  
  // Specify message for span to be inserted
  $span = '<span class="help-block">Passwords are not equal</span>';
  $confirmPassword = $('#confirm-password');
  $password = $('#password');
  $confirmLabel = $confirmPassword.siblings("label");
  $existingSpan = $confirmPassword.siblings("span");
  $confirmDiv = $confirmPassword.parent();
  $submitButton = $("button:submit");
  
  
  // If passwords match, remove span and class
  if( $confirmPassword.val() === $password.val() ) {
    // Enable submit
    $submitButton.attr('disabled', false);
    $existingSpan.detach();
    // Remove error class from div
    $confirmDiv.removeClass("has-error");
  }
  
  // If they do not, create a span and add class,
  // provided that a span does not already exist
  else if( $existingSpan.length === 0 ) { 
    // Disable submit
    $submitButton.attr('disabled', true);
    // Insert span
    $confirmPassword.after($span);
    // Add error class to div
    $confirmDiv.addClass("has-error");
  }
}
