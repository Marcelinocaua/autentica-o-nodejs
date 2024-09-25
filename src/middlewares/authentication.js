function protegerRota(request, response, next){
    if(request.session.usuario) {
        next();
    } else { 
        response.redirect("/");
    }
}

module.exports = {
    protegerRota
}