account_email = 'Hungle@admin'
acount_password = '12345678'

function SignIn() {
    let email_input = document.getElementById('email').value
    let password_input = document.getElementById('Password').value;
    let caseBlock = document.getElementById('checkcase');

    if (email_input == account_email && acount_password == password_input) {
        caseBlock.style.display = 'block';
        caseBlock.innerHTML = 'Sign in successful!!!'
        caseBlock.style.color = 'green'
    }

    else {
        caseBlock.style.display = 'block';
        caseBlock.style.color = 'red';
    }
}