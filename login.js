const logInForm = document.querySelector('#logInForm');
logInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = logInForm['exampleInputEmail1'].value;
    const password = logInForm['exampleInputPassword1'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);


    }).catch((error) => {
        console.log(error)
        const msg = error.message;
        console.log(msg);
    }).then(()=>{
        alert("You are successfully Logged In.")
        window.location.href = './index.html';
    })

})

const logout = document.querySelector('#logout')
logout.addEventListener('click', (e) => {
    e.preventDefault()
    auth.signOut()
    console.log("User Logged Out")
})