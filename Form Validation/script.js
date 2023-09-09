var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

// Name function
function validateName(){
    var name = document.getElementById('contact-name').value;
    // Check the length
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    // Check the value 
    else if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    // If all good, then add the check icon
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

// Phone function
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    // Check the length
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    // Check the length whether it is 10 digits
    else if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    // Check the value
    else if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please.';
        return false;
    }
    // If all good, then add the check icon
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

// Email function
function validateEmail(){
    var email = document.getElementById('contact-email').value;

    // Check the length
    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    // Check the value
    else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }

    // If all good, then add the check icon
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

// Message function
function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 1;
    var left = required - message.length;

    // Check the length
    if(left > 0){
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    // If all good, then add the check icon
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

// Form function
function validateForm(){
    // Check all validation, if nothing invalid, then all good
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}