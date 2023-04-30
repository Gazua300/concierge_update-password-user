const form = document.getElementById('form')
const password = document.getElementById('password')
const confPassword = document.getElementById('confPassword')
const token = document.getElementById('token')
const apiUrl = 'https://concierge-server.vercel.app/password/user'


const cleanFileds = ()=>{
    password.value = ''
    confPassword.value = ''
    token.value = ''
}


const alterPassword = ()=>{
    const body = {
        senha: password.value,
        confSenha: confPassword.value,
        token: token.value
    }
    
    fetch(apiUrl, {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res=> res.json()).then(data=>{
        alert(data)
    }).catch(e=>{
        alert(e)
    })
}


form.addEventListener('submit', (e)=>{
    e.preventDefault()

    alterPassword()
})