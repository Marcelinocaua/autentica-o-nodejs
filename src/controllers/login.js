function renderizarLogin(req, res) {
    res.render('login');
}

function autenticarUsuario(req, response) {
    const {email, password} = req.body

    console.log(email, password);



    if(email === "admin@admin.com" && password === "admin"){

        //salvar a sessão do usuario
        req.session.usuario = {
            email: email
        }

        response.redirect("/dashboard")

    } else {
        console.log("usuario ou senha invalida")
    }
}

function deslogarUsuario(request, response){
    request.session.destroy();
    response.redirect("/")
}

module.exports = {
    renderizarLogin,
    autenticarUsuario,
    deslogarUsuario
}

