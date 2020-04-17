// function toggleResetPswd(e){
//     e.preventDefault();
//     $('#logreg-forms .form-signin').toggle() // display:block or none
//     $('#logreg-forms .form-reset').toggle() // display:block or none
// }

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

$(()=>{
    // Login Register Form
    // $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    // $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})

document.getElementById("sign_in").onclick= function() {optChange()};
function optChange(e) {
    if ($("#opt1").is(":checked")){
        window.location.replace("home.html");
     }
     else if (($("#opt2").is(":checked"))){
        window.location.replace("pengguna.html");
     }
}