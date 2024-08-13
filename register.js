const registerForm = document.querySelector('#registerForm');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = registerForm['exampleInputEmail1'].value;
    const password = registerForm['exampleInputPassword1'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
       
    }).then(()=>{
        alert("You are successfully registerd.")
        window.location.href = './index.html';
    })
    
})

const logout = document.querySelector('#logout')
logout.addEventListener('click', (e) => {
    e.preventDefault()
    auth.signOut()
        console.log("User Logged")
})