function init() {
    const navUl = document.querySelector("nav ul")

    //
    const user = JSON.parse(sessionStorage.getItem("user"))

    //
    //

    //
    if (user) {
        navUl.innerHTML += `
            <li>
                <a href="./pages/jogar.html">Jogar</a>
            </li>
            <li><h2> Usuários: ${user.name}</h2></li>
            <li><button> SAIR </button></li>  
        `
        return
    }

    //
    navUl.innerHTML +=`
        <li>
            <a href="./pages/login.html">Login</a>
        </li>
    `
}

init()