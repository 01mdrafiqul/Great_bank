const login = document.getElementById('btn_login').addEventListener("click", function(){
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    if(email === 'rafiq@gmail.com' && password === 'hasan123') {
        window.location.href = 'calculation.html';
    }
    else {
        alert('Invalid User!');
    }
});
