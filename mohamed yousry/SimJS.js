function search_simulation() {
    let input = document.getElementById('frost-search').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('simgame');
    let simlist =document.getElementById('simlist');
    if (input==""||input==" "||!input) simlist.style.display= "none"
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else if (input==""||input==" "||!input) {
            x[i].style.display = "none";
            simlist.style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
            simlist.style.display = "block";
        }
    }
}
function search_simulation2() {
    let x = document.getElementsByClassName('simgame');
    let input = document.getElementById('frost-search').value
    input = input.toLowerCase();
    let simlist =document.getElementById('simlist');
    if (input==""||input==" "||!input) {
        simlist.style.display = "none";
        for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
        }
    }
}
//main function that locally stores data and calls two other functions, the message popup function and the custom validation function
function frostStorage(event) {
    event.preventDefault();

    var e_mail = document.getElementById("f-e-mail").value;
    var feedback = document.getElementById("f-feedback").value;

    const validationResults = validateFrost(e_mail, feedback);

    if (validationResults.frostValid) {
        document.getElementById('fErrEmail').textContent = '';
        document.getElementById('fErrFeedback').textContent = '';

        localStorage.setItem('ls_email', e_mail);
        localStorage.setItem('ls_feedback', feedback);

        frostPopup();
    } else {
        document.getElementById('fErrEmail').textContent = validationResults.emailError;
        document.getElementById('fErrFeedback').textContent = validationResults.feedbackError;
    }
}


//custom validation function
function validateFrost(email, feedback) {
    let frostValid = true;
    let emailError = '';
    let feedbackError = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        frostValid = false;
        emailError = 'Please enter a valid email address.';
    }
    if (email.trim() === '') {
        frostValid = false;
        emailError = 'Email is required.';
    }
    if (feedback.trim() === '') {
        frostValid = false;
        feedbackError = 'Feedback is required.';
    }
    return {
        frostValid: frostValid,
        emailError: emailError,
        feedbackError: feedbackError
    };
}

//popup message function
function frostPopup() {
    const popupMessage = document.getElementById('frostPopup');
    const closeButton = document.getElementById('frostClose');
    popupMessage.style.display = 'block';
    closeButton.addEventListener('click', function() {
        popupMessage.style.display = 'none';
    });
    window.addEventListener('click', function(event) {
        if(event.target === popupMessage) {
            popupMessage.style.display = 'none';
        }
    });
}