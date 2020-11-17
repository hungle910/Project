Function:SignIn(){
    Accont_email=Duyhungle140@Admins
    Account_password=12345678
    let email_input = document.getElementById('email').value
    let password_input = document.getElementById('password').value
    let caseblock = document.getElementById('Checkcase')
    if(email_input == Account_email && password_input == Account_password)
    {Caseblock.innerHTML='Sign in Successful'
    Caseblock.style.colour='green'}
    else{
        caseblock.style.display='block'
    }
}