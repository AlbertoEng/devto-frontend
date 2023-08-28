

document.getElementById("login-button").addEventListener("click", async( ev ) => {

    ev.preventDefault()
    const email = document.getElementById('exampleInputEmail1')
    const password = document.getElementById('exampleInputPassword1');
    const user = {email: email.value, password: password.value}
    const token = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        }
    })
    if(token){
        const dataDecoded = await token.json()
        const data = dataDecoded;
        localStorage.setItem('token', data.data.token)
        localStorage.setItem('user', data.data.user)
        window.open('../index.html', '_self');
    }

    
    
});
